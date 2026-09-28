<script setup lang="ts">
/**
 * KnFooter — the shared "part of kynguyen.cc" strip.
 *
 * The same file is copied verbatim into `app/components/KnFooter.vue` of every
 * app in the ecosystem (there is no shared package between the repos). The
 * canonical copy lives in nguyenrot/vibe-hub at `shared/KnFooter.vue` — edit
 * THAT one, then re-copy it everywhere (see vibe-hub/CLAUDE.md).
 *
 * Zero dependencies on purpose: plain Vue, no i18n module, no Nuxt
 * composables, no Tailwind classes, no fonts. Everything inherits
 * (`font: inherit`, `color: currentColor`) so the strip sits quietly at the
 * bottom of ten very different designs — terminal dark, magazine paper,
 * neon game menus — without carrying a palette of its own.
 */
import { computed } from 'vue'

type Lang = 'vi' | 'en'

const props = withDefaults(
  defineProps<{
    /** id of the host app — it is left out of the sibling list */
    current?: string
    lang?: Lang
    /** game title screens: centred, no rule, smaller */
    compact?: boolean
  }>(),
  { current: '', lang: 'vi', compact: false },
)

// Keep in sync with vibe-hub/app/lib/apps.ts (the hub's directory is the
// source of truth; this is the short-name subset).
const APPS = [
  { id: 'lattice', name: 'Lattice', url: 'https://lattice.kynguyen.cc' },
  { id: 'cafe', name: 'Cà Phê', url: 'https://cafe.kynguyen.cc' },
  { id: 'lumi', name: 'Lumi', url: 'https://lumi.kynguyen.cc' },
  { id: 'tool', name: 'Tools', url: 'https://tool.kynguyen.cc' },
  { id: 'wiki', name: 'Wiki', url: 'https://wiki.kynguyen.cc' },
  { id: 'football', name: 'Football', url: 'https://football.kynguyen.cc' },
  { id: 'mcp', name: 'MCP', url: 'https://mcp.kynguyen.cc' },
  { id: 'gm', name: 'GM', url: 'https://gm.kynguyen.cc' },
  { id: 'citadel', name: 'Citadel', url: 'https://citadel.kynguyen.cc' },
  { id: 'goviet', name: 'GõViệt', url: 'https://goviet.kynguyen.cc' },
  { id: 'bloomwire', name: 'Bloomwire', url: 'https://bloomwire.kynguyen.cc' },
] as const

const COPY: Record<Lang, { tag: string; all: string; aria: string; home: string }> = {
  vi: {
    tag: 'Một app trong hệ sinh thái của Phạm Kỷ Nguyên',
    all: 'Tất cả app',
    aria: 'Các app khác trên kynguyen.cc',
    home: 'Trang chủ kynguyen.cc',
  },
  en: {
    tag: 'One of the apps Phạm Kỷ Nguyên builds and runs',
    all: 'All apps',
    aria: 'Other apps on kynguyen.cc',
    home: 'kynguyen.cc home',
  },
}

const siblings = computed(() => APPS.filter((a) => a.id !== props.current))
const copy = computed(() => COPY[props.lang] ?? COPY.vi)
</script>

<template>
  <footer class="kn" :class="{ 'kn--compact': compact }" :lang="lang">
    <div class="kn__in">
      <a class="kn__brand" href="https://kynguyen.cc/" :aria-label="copy.home">
        <svg class="kn__mark" viewBox="0 0 320 320" fill="none" aria-hidden="true">
          <defs>
            <mask :id="`kn-mask-${current || 'x'}`">
              <rect width="320" height="320" fill="white" />
              <polygon fill="black" points="51,66 75,66 75,142 133,66 163,66 101,154 167,242 139,242 75,162 75,242 51,242" />
              <polygon fill="black" points="179,66 203,66 243,200 243,66 265,66 265,242 241,242 201,108 201,242 179,242" />
            </mask>
          </defs>
          <rect x="14" y="10" width="288" height="288" rx="22" fill="currentColor" :mask="`url(#kn-mask-${current || 'x'})`" />
        </svg>
        <span class="kn__name">kynguyen<b>.cc</b></span>
      </a>
      <span class="kn__tag">{{ copy.tag }}</span>
      <nav class="kn__links" :aria-label="copy.aria">
        <a v-for="s in siblings" :key="s.id" :href="s.url" rel="noopener">{{ s.name }}</a>
        <a class="kn__all" href="https://kynguyen.cc/#apps">{{ copy.all }} →</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.kn {
  font: inherit;
  font-size: 12px;
  line-height: 1.5;
  color: inherit;
  border-top: 1px solid color-mix(in srgb, currentColor 14%, transparent);
  padding: 14px clamp(16px, 4vw, 32px) calc(14px + env(safe-area-inset-bottom, 0px));
}
.kn__in {
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px 18px;
}
.kn__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
}
.kn__mark {
  width: 18px;
  height: 18px;
  flex: none;
  display: block;
}
.kn__name b {
  font-weight: 700;
  opacity: 0.55;
}
.kn__tag {
  opacity: 0.6;
}
.kn__links {
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 14px;
}
.kn__links a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}
.kn__links a:hover,
.kn__links a:focus-visible {
  opacity: 1;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.kn__all {
  font-weight: 600;
  opacity: 0.85;
}

/* compact — game title screens */
.kn--compact {
  border-top: 0;
  padding: 8px 12px;
  font-size: 11px;
}
.kn--compact .kn__in {
  justify-content: center;
  text-align: center;
  gap: 6px 12px;
}
.kn--compact .kn__tag { display: none; }
.kn--compact .kn__links {
  margin-left: 0;
  justify-content: center;
  gap: 4px 10px;
}

@media (max-width: 640px) {
  .kn__links { margin-left: 0; }
}
</style>
