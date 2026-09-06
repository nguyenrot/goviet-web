<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue'
import { GITHUB } from '~/lib/site'

const { t } = useI18n()
const { data: release } = useRelease()
const downloadHref = computed(() => release.value?.downloadUrl || GITHUB + '/releases/latest')
const version = computed(() => release.value?.version)
</script>

<template>
  <section id="top" class="relative pt-24 pb-16 sm:pt-24 sm:pb-24">
    <div class="wrap">
      <div class="mx-auto max-w-[720px] text-center">
        <h1 class="text-[clamp(34px,6vw,56px)] font-bold leading-[1.08] tracking-[-0.04em]">
          {{ t('hero.h1a') }}
          <span class="block text-muted font-semibold">{{ t('hero.h1b') }}</span>
        </h1>
        <p class="mx-auto mt-5 max-w-[42ch] text-[17px] leading-relaxed text-muted">
          {{ t('hero.sub') }}
        </p>
        <div class="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a :href="downloadHref" class="btn btn-primary">{{ t('hero.download') }}</a>
          <a :href="GITHUB" class="btn btn-ghost" rel="noopener">
            <PhGithubLogo :size="16" :weight="'light'" />
            {{ t('hero.github') }}
          </a>
        </div>
        <p class="mt-4 text-[12px] text-muted">
          <span>{{ t('hero.metaOs') }}</span>
          <span aria-hidden="true"> · </span>
          <span>{{ t('hero.metaChip') }}</span>
          <span aria-hidden="true"> · </span>
          <span>{{ t('hero.metaOss') }}</span>
          <template v-if="version">
            <span aria-hidden="true"> · </span>
            <span>{{ version }}</span>
          </template>
        </p>
      </div>

      <div class="mx-auto mt-12 max-w-[720px] sm:mt-14">
        <TypingDemo />
      </div>
    </div>
  </section>
</template>
