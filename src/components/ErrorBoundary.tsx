import { Component, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: { componentStack: string }) => void
}

type State = {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    this.props.onError?.(error, errorInfo)
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-4 text-white">
          <section className="rounded-xl border border-line bg-white p-8 text-ink shadow-2xl sm:p-12">
            <h2 className="font-display text-xl font-extrabold">Erro inesperado</h2>
            <p className="mt-2 text-sm leading-6 text-muted">{this.state.error?.message ?? 'Ocorreu um erro inesperado.'}</p>
            <button className="mt-4 rounded-lg bg-sea px-4 py-2.5 text-sm font-extrabold text-white" onClick={() => window.location.reload()}>
              Recarregar página
            </button>
          </section>
        </div>
      )
    }
    return this.props.children
  }
}
