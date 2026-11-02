import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MindMapViewer } from '../components/MindMapViewer'

const map = { id: 'map', title: 'Sistemas operacionais', content_type: 'image/png', local_path: null }
let originalWidth: PropertyDescriptor | undefined
let originalHeight: PropertyDescriptor | undefined

beforeEach(() => {
  originalWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth')
  originalHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight')
  Object.defineProperty(HTMLElement.prototype, 'clientWidth', { configurable: true, get: () => 360 })
  Object.defineProperty(HTMLElement.prototype, 'clientHeight', { configurable: true, get: () => 600 })
  class TestPointerEvent extends MouseEvent {
    pointerId: number
    pointerType: string
    constructor(type: string, init: PointerEventInit) { super(type, init); this.pointerId = init.pointerId ?? 1; this.pointerType = init.pointerType ?? 'touch' }
  }
  vi.stubGlobal('PointerEvent', TestPointerEvent)
})
afterEach(() => {
  cleanup(); vi.unstubAllGlobals()
  if (originalWidth) Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalWidth)
  else Reflect.deleteProperty(HTMLElement.prototype, 'clientWidth')
  if (originalHeight) Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalHeight)
  else Reflect.deleteProperty(HTMLElement.prototype, 'clientHeight')
})

function loadMap() {
  const image = screen.getByRole('img', { hidden: true }) as HTMLImageElement
  Object.defineProperty(image, 'naturalWidth', { configurable: true, value: 1200 })
  Object.defineProperty(image, 'naturalHeight', { configurable: true, value: 2400 })
  fireEvent.load(image)
  return image
}

describe('mobile mind map reader', () => {
  it('fits a tall map to the viewport and allows width fitting, zoom and reset', async () => {
    render(<MindMapViewer map={map} url="/map.png" onClose={vi.fn()} />)
    const image = loadMap()
    expect(image.style.width).toBe('300px')
    expect(image.style.height).toBe('600px')
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Ajustar à largura' }))
    expect(image.style.width).toBe('360px')
    await user.click(screen.getByRole('button', { name: 'Aumentar zoom' }))
    expect(parseFloat(image.style.width)).toBeCloseTo(540)
    await user.click(screen.getByRole('button', { name: 'Ajustar à tela' }))
    expect(image.style.width).toBe('300px')
    expect((screen.getByRole('button', { name: 'Diminuir zoom' }) as HTMLButtonElement).disabled).toBe(true)
  })

  it('supports pinch zoom followed by dragging after one finger is lifted', () => {
    render(<MindMapViewer map={map} url="/map.png" onClose={vi.fn()} />)
    const image = loadMap()
    const viewport = screen.getByLabelText('Área de leitura do mapa')
    fireEvent.pointerDown(viewport, { pointerId: 1, clientX: 100, clientY: 200 })
    fireEvent.pointerDown(viewport, { pointerId: 2, clientX: 200, clientY: 200 })
    fireEvent.pointerMove(viewport, { pointerId: 2, clientX: 300, clientY: 200 })
    expect(image.style.width).toBe('600px')
    fireEvent.pointerUp(viewport, { pointerId: 2 })
    const previousScroll = viewport.scrollTop
    fireEvent.pointerMove(viewport, { pointerId: 1, clientX: 100, clientY: 100 })
    expect(viewport.scrollTop).toBe(previousScroll + 100)
    fireEvent.pointerCancel(viewport, { pointerId: 1 })
  })

  it('locks page scrolling, closes with Escape and restores focus on leaving', () => {
    const trigger = document.createElement('button')
    document.body.append(trigger); trigger.focus()
    const onClose = vi.fn()
    const view = render(<MindMapViewer map={map} url="/map.png" onClose={onClose} />)
    expect(document.body.style.overflow).toBe('hidden')
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Fechar mapa' }))
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
    view.unmount()
    expect(document.body.style.overflow).toBe('')
    expect(document.activeElement).toBe(trigger)
    trigger.remove()
  })

  it('provides an external PDF reader and an actionable image loading error', () => {
    const view = render(<MindMapViewer map={{ ...map, content_type: 'application/pdf' }} url="/map.pdf" onClose={vi.fn()} />)
    expect(screen.getByRole('link', { name: 'Abrir PDF' }).getAttribute('href')).toBe('/map.pdf')
    expect(view.container.querySelector('iframe')?.title).toBe(map.title)
    view.rerender(<MindMapViewer map={map} url="/broken.png" onClose={vi.fn()} />)
    fireEvent.error(screen.getByRole('img', { hidden: true }))
    expect(screen.getByRole('alert').textContent).toContain('Não foi possível exibir o mapa')
  })
})
