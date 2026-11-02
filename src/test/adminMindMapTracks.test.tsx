import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it, vi } from 'vitest'
const mock = vi.hoisted(() => ({ update: vi.fn(), record: { id: 'm1', title: 'Mapa de sistemas', subject: 'Informática', description: null, storage_path: 'map.png', content_type: 'image/png', sort_order: 0, is_published: false, updated_at: '2026-11-02T12:00:00Z', track_steps: [] as string[] } }))
vi.mock('../lib/adminSupabase', () => ({ adminSupabase: {
  from: () => ({
    select: () => {
      const query = { order: () => query, then: (resolve: (value: unknown) => void) => resolve({ data: [mock.record], error: null }) }
      return query
    },
    update: (payload: object) => {
      mock.update(payload)
      return { eq: () => ({ select: () => ({ single: async () => ({ data: { ...mock.record, ...payload }, error: null }) }) }) }
    },
  }),
} }))
import AdminMindMapsPanel from '../components/AdminMindMapsPanel'
afterEach(cleanup)
it('lets an administrator associate a map with multiple stable study steps', async () => {
  render(<AdminMindMapsPanel />)
  const user = userEvent.setup()
  await user.click(await screen.findByRole('button', { name: /Mapa de sistemas/ }))
  await user.click(screen.getByRole('checkbox', { name: 'Sistemas operacionais e Linux na prática' }))
  await user.click(screen.getByRole('checkbox', { name: 'Segurança e privacidade' }))
  await user.click(screen.getByRole('button', { name: 'Salvar e publicar' }))
  expect(await screen.findByText('Mapa salvo e publicado.')).toBeTruthy()
  expect(mock.update).toHaveBeenCalledWith(expect.objectContaining({ track_steps: ['cpt-2026-infra/so', 'cpt-2026-infra/seguranca'], is_published: true }))
})
