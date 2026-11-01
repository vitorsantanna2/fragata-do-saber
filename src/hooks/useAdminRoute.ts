import { useSyncExternalStore } from 'react'

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange)
  return () => window.removeEventListener('hashchange', onChange)
}

function isAdminRoute() {
  return window.location.hash === '#admin'
}

function closeAdmin() {
  window.location.replace('#inicio')
}

export function useAdminRoute() {
  const adminMode = useSyncExternalStore(subscribe, isAdminRoute, () => false)
  return { adminMode, closeAdmin }
}
