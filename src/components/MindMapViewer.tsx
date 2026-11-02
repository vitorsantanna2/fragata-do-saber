import { useCallback, useEffect, useLayoutEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'

type MindMapViewerProps = {
  map: { id: string; title: string; content_type: string; local_path: string | null }
  url: string
  onClose: () => void
}
type Size = { width: number; height: number }
type Point = { x: number; y: number }
type Gesture = { distance: number; zoom: number; center: Point; scroll: Point }
const control = 'min-h-11 min-w-11 rounded-lg border border-white/25 px-3 py-2 text-sm font-bold text-white hover:bg-white/10 disabled:opacity-40'
const limitZoom = (value: number) => Math.max(1, Math.min(12, value))

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const viewport = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState<Size>({ width: 0, height: 0 })
  const [natural, setNatural] = useState<Size>({ width: 0, height: 0 })
  const [zoom, setZoom] = useState(1)
  const [failed, setFailed] = useState(false)
  const zoomRef = useRef(1)
  const scrollTarget = useRef<Point | null>(null)
  const pointers = useRef(new Map<number, Point>())
  const gesture = useRef<Gesture | null>(null)
  const drag = useRef<{ point: Point; scroll: Point } | null>(null)
  const fit = natural.width && size.width ? Math.min(size.width / natural.width, size.height / natural.height, 1) : 0
  const imageWidth = natural.width * fit * zoom
  const imageHeight = natural.height * fit * zoom
  const ready = !!fit && !failed

  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const measure = () => {
      setSize({ width: element.clientWidth, height: element.clientHeight })
      zoomRef.current = 1
      setZoom(1)
      scrollTarget.current = { x: 0, y: 0 }
    }
    measure()
    const observer = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measure) : null
    observer?.observe(element)
    window.addEventListener('resize', measure)
    return () => { observer?.disconnect(); window.removeEventListener('resize', measure) }
  }, [])

  const changeZoom = useCallback((next: number, anchor?: Point, initial?: Gesture) => {
    const element = viewport.current
    if (!element || !fit) return
    const bounded = limitZoom(next)
    const oldZoom = initial?.zoom ?? zoomRef.current
    const oldWidth = natural.width * fit * oldZoom
    const oldHeight = natural.height * fit * oldZoom
    const oldAnchor = initial?.center ?? anchor ?? { x: size.width / 2, y: size.height / 2 }
    const newAnchor = anchor ?? oldAnchor
    const scroll = initial?.scroll ?? { x: element.scrollLeft, y: element.scrollTop }
    const x = (scroll.x + oldAnchor.x - Math.max(0, (size.width - oldWidth) / 2)) / oldWidth
    const y = (scroll.y + oldAnchor.y - Math.max(0, (size.height - oldHeight) / 2)) / oldHeight
    const width = natural.width * fit * bounded
    const height = natural.height * fit * bounded
    scrollTarget.current = {
      x: Math.max(0, (size.width - width) / 2) + x * width - newAnchor.x,
      y: Math.max(0, (size.height - height) / 2) + y * height - newAnchor.y,
    }
    if (bounded === zoomRef.current) {
      element.scrollLeft = scrollTarget.current.x
      element.scrollTop = scrollTarget.current.y
      scrollTarget.current = null
    }
    zoomRef.current = bounded
    setZoom(bounded)
  }, [fit, natural, size])

  useLayoutEffect(() => {
    if (viewport.current && scrollTarget.current) {
      viewport.current.scrollLeft = scrollTarget.current.x
      viewport.current.scrollTop = scrollTarget.current.y
      scrollTarget.current = null
    }
  }, [zoom, size, natural])

  function startGesture() {
    const element = viewport.current
    if (!element) return
    const points = [...pointers.current.values()]
    if (points.length >= 2) {
      const rect = element.getBoundingClientRect()
      gesture.current = {
        distance: Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y), zoom: zoomRef.current,
        center: { x: (points[0].x + points[1].x) / 2 - rect.left, y: (points[0].y + points[1].y) / 2 - rect.top },
        scroll: { x: element.scrollLeft, y: element.scrollTop },
      }
      drag.current = null
    } else if (points.length === 1) {
      gesture.current = null
      drag.current = { point: points[0], scroll: { x: element.scrollLeft, y: element.scrollTop } }
    } else { gesture.current = null; drag.current = null }
  }

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (!ready || (event.pointerType === 'mouse' && event.button !== 0)) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    event.currentTarget.setPointerCapture?.(event.pointerId)
    startGesture()
  }
  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const element = viewport.current
    if (!element || !pointers.current.has(event.pointerId)) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    const points = [...pointers.current.values()]
    if (points.length >= 2 && gesture.current) {
      const rect = element.getBoundingClientRect()
      changeZoom(gesture.current.zoom * Math.hypot(points[1].x - points[0].x, points[1].y - points[0].y) / Math.max(gesture.current.distance, 1),
        { x: (points[0].x + points[1].x) / 2 - rect.left, y: (points[0].y + points[1].y) / 2 - rect.top }, gesture.current)
    } else if (drag.current) {
      element.scrollLeft = drag.current.scroll.x + drag.current.point.x - event.clientX
      element.scrollTop = drag.current.scroll.y + drag.current.point.y - event.clientY
    }
  }
  function onPointerEnd(event: ReactPointerEvent<HTMLDivElement>) {
    pointers.current.delete(event.pointerId)
    startGesture()
  }

  return <>
    <div className="flex shrink-0 flex-wrap items-center justify-center gap-2 bg-slate-900 px-3 py-2" role="toolbar" aria-label="Controles do mapa">
      <button type="button" className={control} disabled={!ready || zoom <= 1} aria-label="Diminuir zoom" onClick={() => changeZoom(zoomRef.current / 1.5)}>−</button>
      <output className="min-w-14 text-center text-sm font-bold text-white" aria-label="Nível de zoom">{Math.round(zoom * 100)}%</output>
      <button type="button" className={control} disabled={!ready || zoom >= 12} aria-label="Aumentar zoom" onClick={() => changeZoom(zoomRef.current * 1.5)}>+</button>
      <button type="button" className={control} disabled={!ready} onClick={() => changeZoom(1)}>Ajustar à tela</button>
      <button type="button" className={control} disabled={!ready} onClick={() => changeZoom(size.width / (natural.width * fit))}>Ajustar à largura</button>
    </div>
    <div ref={viewport} tabIndex={0} aria-label="Área de leitura do mapa" className="min-h-0 flex-1 overflow-auto bg-slate-200 outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" style={{ touchAction: 'none', overscrollBehavior: 'contain' }}
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerEnd} onPointerCancel={onPointerEnd} onLostPointerCapture={onPointerEnd}
      onDoubleClick={(event) => { const rect = event.currentTarget.getBoundingClientRect(); changeZoom(zoomRef.current > 1 ? 1 : 2, { x: event.clientX - rect.left, y: event.clientY - rect.top }) }}
      onKeyDown={(event) => { if (['+', '=', '-', '0'].includes(event.key)) { event.preventDefault(); changeZoom(event.key === '0' ? 1 : event.key === '-' ? zoomRef.current / 1.5 : zoomRef.current * 1.5) } }}>
      {failed ? <p role="alert" className="p-6 text-center text-slate-900">Não foi possível exibir o mapa. Feche e tente abri-lo novamente.</p> : <div className="flex items-center justify-center" style={{ width: Math.max(size.width, imageWidth), height: Math.max(size.height, imageHeight) }}>
        <img src={src} alt={alt} draggable={false} onError={() => setFailed(true)} onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })}
          style={{ width: imageWidth || undefined, height: imageHeight || undefined, maxWidth: 'none', visibility: ready ? 'visible' : 'hidden', flexShrink: 0, userSelect: 'none' }} />
        {!natural.width && <p role="status" className="text-sm text-slate-900">Carregando mapa…</p>}
      </div>}
    </div>
    <p className="shrink-0 bg-slate-900 px-3 py-2 text-center text-xs text-slate-300">Use dois dedos para ampliar e arraste para navegar. Também é possível usar os botões acima.</p>
  </>
}

export function MindMapViewer({ map, url, onClose }: MindMapViewerProps) {
  const isPdf = map.content_type === 'application/pdf'
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const close = useRef(onClose)
  useEffect(() => { close.current = onClose }, [onClose])
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButton.current?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { event.preventDefault(); close.current() }
      if (event.key === 'Tab') {
        const items = dialog.current?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], iframe, [tabindex="0"]')
        if (!items?.length) return
        const first = items[0], last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [])

  return <div ref={dialog} className="fixed inset-0 z-50 flex flex-col bg-slate-950" style={{ height: '100dvh', paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }} role="dialog" aria-modal="true" aria-label={map.title}>
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-white/15 px-3 py-2">
      <h2 className="min-w-0 flex-1 truncate text-sm font-bold text-white" title={map.title}>{map.title}</h2>
      {isPdf && <a href={url} target="_blank" rel="noopener noreferrer" className={control}>Abrir PDF</a>}
      <button ref={closeButton} className={control} type="button" aria-label="Fechar mapa" onClick={onClose}>Fechar ×</button>
    </header>
    {isPdf ? <iframe title={map.title} src={url} className="min-h-0 w-full flex-1 border-0 bg-white" /> : <ZoomableImage key={url} src={url} alt={map.title} />}
  </div>
}
