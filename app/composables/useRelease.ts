import { RELEASE_FALLBACK, type ReleaseInfo } from '~/lib/site'

export function useRelease() {
  return useAsyncData<ReleaseInfo>(
    'goviet-release',
    () => $fetch<ReleaseInfo>('/api/release'),
    { default: () => RELEASE_FALLBACK },
  )
}
