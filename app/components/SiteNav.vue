<script setup lang="ts">
import { PhGithubLogo, PhMoon, PhSun, PhList, PhX } from '@phosphor-icons/vue'
import { GITHUB } from '~/lib/site'

const { t, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const { data: release } = useRelease()
const { theme, cycleTheme, apply } = usePrefs()
const open = ref(false)
const isDark = ref(false)

function refreshDark() {
  if (!import.meta.client) return
  isDark.value = document.documentElement.classList.contains('dark')
}

onMounted(() => {
  apply(theme.value)
  refreshDark()
})

function onTheme() {
  cycleTheme()
  refreshDark()
}

const downloadHref = computed(() => release.value?.downloadUrl || GITHUB + '/releases/latest')
const otherLocale = computed(() => (locale.value === 'vi' ? 'en' : 'vi'))

watch(open, (v) => {
  if (!import.meta.client) return
  document.body.style.overflow = v ? 'hidden' : ''
})
onBeforeUnmount(() => {
  if (import.meta.client) document.body.style.overflow = ''
})

function close() {
  open.value = false
}
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-40 pt-3 sm:pt-4">
    <a href="#main" class="skip">{{ locale === 'vi' ? 'Tới nội dung' : 'Skip to content' }}</a>
    <div class="wrap pointer-events-auto">
      <nav
        class="flex h-14 items-center gap-3 rounded-full border border-line bg-surface/90 px-3 shadow-[var(--gv-shadow)] backdrop-blur-md sm:px-4"
        aria-label="GoViet"
      >
        <a href="#top" class="flex items-center gap-2 pl-1 font-semibold tracking-[-0.03em]" @click="close">
          <img src="/icon-192.png" width="28" height="28" alt="" class="h-7 w-7 rounded-[7px]" />
          <span>GõViệt</span>
        </a>

        <div class="ml-auto hidden items-center gap-1 text-[13px] font-medium text-muted md:flex">
          <a href="#features" class="rounded-full px-3 py-2 hover:text-ink">{{ t('nav.features') }}</a>
          <a href="#install" class="rounded-full px-3 py-2 hover:text-ink">{{ t('nav.install') }}</a>
          <a :href="GITHUB" class="rounded-full px-3 py-2 hover:text-ink" rel="noopener">{{ t('nav.github') }}</a>
        </div>

        <div class="ml-auto flex items-center gap-1 md:ml-2">
          <NuxtLink
            :to="switchLocalePath(otherLocale)"
            class="hidden rounded-full px-2.5 py-2 text-[12px] font-bold tracking-wide text-muted hover:text-ink sm:inline"
          >{{ t('nav.lang') }}</NuxtLink>
          <button type="button" class="grid h-9 w-9 place-items-center rounded-full text-muted hover:text-ink" :aria-label="t('nav.theme')" @click="onTheme">
            <PhMoon v-if="!isDark" :size="16" :weight="'light'" />
            <PhSun v-else :size="16" :weight="'light'" />
          </button>
          <a :href="downloadHref" class="btn btn-primary !min-h-9 !px-3.5 text-[13px]">
            <span class="sm:hidden">{{ t('nav.downloadShort') }}</span>
            <span class="hidden sm:inline">{{ t('nav.download') }}</span>
          </a>
          <button
            type="button"
            class="grid h-9 w-9 place-items-center rounded-full md:hidden"
            :aria-label="open ? t('nav.close') : t('nav.menu')"
            :aria-expanded="open"
            @click="open = !open"
          >
            <PhX v-if="open" :size="18" :weight="'light'" />
            <PhList v-else :size="18" :weight="'light'" />
          </button>
        </div>
      </nav>
    </div>

    <div v-if="open" class="pointer-events-auto md:hidden">
      <button type="button" class="fixed inset-0 bg-ink/30" :aria-label="t('nav.close')" @click="close" />
      <div class="relative wrap">
        <div class="mt-2 rounded-2xl border border-line bg-surface p-4 shadow-[var(--gv-shadow)]">
          <a href="#features" class="block rounded-xl px-3 py-3 font-medium" @click="close">{{ t('nav.features') }}</a>
          <a href="#install" class="block rounded-xl px-3 py-3 font-medium" @click="close">{{ t('nav.install') }}</a>
          <a :href="GITHUB" class="flex items-center gap-2 rounded-xl px-3 py-3 font-medium" rel="noopener" @click="close">
            <PhGithubLogo :size="16" :weight="'light'" /> {{ t('nav.github') }}
          </a>
          <NuxtLink :to="switchLocalePath(otherLocale)" class="block rounded-xl px-3 py-3 font-medium" @click="close">{{ t('nav.lang') }}</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
