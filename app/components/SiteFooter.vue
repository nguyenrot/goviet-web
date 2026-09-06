<script setup lang="ts">
import { GITHUB, GITHUB_RELEASES, LICENSE } from '~/lib/site'

const { t, locale } = useI18n()
</script>

<template>
  <footer class="border-t border-line py-10">
    <div class="wrap flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] text-muted">
      <span class="font-semibold text-ink">GõViệt</span>
      <a :href="GITHUB" rel="noopener">{{ t('footer.github') }}</a>
      <a :href="GITHUB_RELEASES" rel="noopener">{{ t('footer.releases') }}</a>
      <a :href="LICENSE" rel="noopener">{{ t('footer.license') }}</a>
      <a href="https://kynguyen.cc/">{{ t('footer.home') }}</a>
    </div>
    <KnFooter current="goviet" :lang="locale === 'en' ? 'en' : 'vi'" />
  </footer>
</template>
