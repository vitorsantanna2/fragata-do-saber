import { useEffect, useRef, useState, type TouchEvent as ReactTouchEvent } from 'react'

type MindMapViewerProps = {
  map: { id: string; title: string; content_type: string; local_path: string | null }
  url: string
  onClose: () => void
}

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const gesture = useRef<{ distance: number; scale: number; x: number; y: number; clientX: number; clientY: number } | null>(null)

  function zoom(nextScale: number) {
    const boundedScale = Math.min(5, Math.max(1, nextScale))
    setScale(boundedScale)
    if (boundedScale === 1) setOffset({ x: 0, y: 0 })
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === '+' || event.key === '=') zoom(scale + 0.5)
      else if (event.key === '-') zoom(scale - 0.5)
      else if (event.key === '0') zoom(1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [scale])

  function onTouchStart(event: ReactTouchEvent<HTMLDivElement>) {
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      gesture.current = {
        distance: Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY),
        scale,
        x: offset.x,
        y: offset.y,
        clientX: (first.clientX + second.clientX) / 2,
        clientY: (first.clientY + second.clientY) / 2,
      }
    } else {
      const touch = event.touches[0]
      gesture.current = { distance: 0, scale, x: offset.x, y: offset.y, clientX: touch.clientX, clientY: touch.clientY }
    }
  }

  function onTouchMove(event: ReactTouchEvent<HTMLDivElement>) {
    const start = gesture.current
    if (!start) return
    event.preventDefault()
    if (event.touches.length > 1) {
      const first = event.touches[0]
      const second = event.touches[1]
      const distance = Math.hypot(second.clientX - first.clientX, second.clientY - first.clientY)
      const centerX = (first.clientX + second.clientX) / 2
      const centerY = (first.clientY + second.clientY) / 2
      zoom(start.scale * distance / Math.max(start.distance, 1))
      setOffset({ x: start.x + centerX - start.clientX, y: start.y + centerY - start.clientY })
    } else if (start.scale > 1) {
      const touch = event.touches[0]
      setOffset({ x: start.x + touch.clientX - start.clientX, y: start.y + touch.clientY - start.clientY })
    }
  }

  function onTouchEnd() {
    gesture.current = null
  }

  return (
    <div className="relative max-w-[90vw] max-h-[90vh] overflow-auto" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} style={{ touchAction: 'none' }}>
      <img src={src} alt={alt} className="block cursor-zoom-in" style={{ transform: `scale(${scale}) translate(${offset.x}px, ${offset.y}px)`, transformOrigin: 'top left' }} />
    </div>
  )
}

export function MindMapViewer({ map, url, onClose }: MindMapViewerProps) {
  const isPdf = map.content_type === 'application/pdf'

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-1" role="dialog" aria-modal="true" aria-label={map.title} onClick={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <button className="absolute top-1 right-1 z-10 rounded-lg border border-line bg-white px-2 py-1 text-xs font-bold" type="button" onClick={onClose}>×</button>
      <div className="relative max-w-[95vw] max-h-[95vh] overflow-auto bg-white rounded-lg shadow-2xl">
        {isPdf ? (
          <embed src={url} type="application/pdf" className="max-w-[90vw] max-h-[90vh] block mx-auto" />
        ) : (
          <ZoomableImage src={url} alt={map.title} />
        )}
      </div>
    </div>
  )
}
