export type ThemeMode = 'light' | 'dark' | 'system'

export function usePrefs() {
  const theme = useCookie<ThemeMode>('kn:theme', {
    default: () => 'light',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })

  function apply(mode: ThemeMode) {
    if (!import.meta.client) return
    const dark =
      mode === 'dark' ||
      (mode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', dark)
  }

  function cycleTheme() {
    const nowDark = import.meta.client && document.documentElement.classList.contains('dark')
    theme.value = nowDark ? 'light' : 'dark'
    apply(theme.value)
  }

  return { theme, cycleTheme, apply }
}
