export const GITHUB = 'https://github.com/nguyenrot/goviet'
export const GITHUB_RELEASES = 'https://github.com/nguyenrot/goviet/releases/latest'
export const GITHUB_LIMITS =
  'https://github.com/nguyenrot/goviet/blob/main/rust/engine/tests/corpus/known_limitations.tsv'
export const LICENSE = 'https://github.com/nguyenrot/goviet/blob/main/LICENSE'
export const SITE = 'https://goviet.kynguyen.cc'
export const MIN_OS = 'macOS 14'

export type ReleaseInfo = {
  version: string | null
  tag: string | null
  name: string | null
  htmlUrl: string
  downloadUrl: string
  publishedAt: string | null
}

export const RELEASE_FALLBACK: ReleaseInfo = {
  version: null,
  tag: null,
  name: null,
  htmlUrl: GITHUB_RELEASES,
  downloadUrl: GITHUB_RELEASES,
  publishedAt: null,
}
