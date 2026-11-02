import { Capacitor } from '@capacitor/core'

// Pré-releases não são atendidos pelo atalho /releases/latest/download do GitHub.
const apkUrl = 'https://github.com/vitorsantanna2/fragata-do-saber/releases/download/v1.1.0-beta.1/fragata-do-saber-v1.1.0-beta.1.apk'

export function AndroidDownloadLink() {
  if (Capacitor.isNativePlatform()) return null
  return <a href={apkUrl} className="inline-flex items-center justify-center rounded-lg border border-sea bg-sea-light px-3 py-2 text-sm font-bold text-sea transition hover:bg-sea hover:text-white" aria-label="Baixar aplicativo Android (APK beta)">Baixar para Android · Beta</a>
}
