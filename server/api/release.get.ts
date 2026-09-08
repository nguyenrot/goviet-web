import { RELEASE_FALLBACK, type ReleaseInfo } from '~/lib/site'

type GithubRelease = {
  tag_name?: string
  name?: string
  html_url?: string
  published_at?: string
  assets?: { name?: string; browser_download_url?: string }[]
}

export default defineCachedEventHandler(
  async (): Promise<ReleaseInfo> => {
    try {
      const data = await $fetch<GithubRelease>(
        'https://api.github.com/repos/nguyenrot/goviet/releases/latest',
        {
          headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'goviet.kynguyen.cc' },
          timeout: 4000,
        },
      )
      const dmg = data.assets?.find((a) => a.name?.toLowerCase().endsWith('.dmg'))
      const tag = data.tag_name ?? null
      return {
        version: tag ? tag.replace(/^v/i, '') : null,
        tag,
        name: data.name ?? null,
        htmlUrl: data.html_url || RELEASE_FALLBACK.htmlUrl,
        downloadUrl: dmg?.browser_download_url || RELEASE_FALLBACK.downloadUrl,
        publishedAt: data.published_at ?? null,
      }
    } catch {
      return RELEASE_FALLBACK
    }
  },
  { maxAge: 60, swr: true, name: 'goviet-release' },
)
