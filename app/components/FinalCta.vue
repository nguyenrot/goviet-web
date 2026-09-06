<script setup lang="ts">
import { PhGithubLogo } from '@phosphor-icons/vue'
import { GITHUB } from '~/lib/site'

const { t } = useI18n()
const { data: release } = useRelease()
const downloadHref = computed(() => release.value?.downloadUrl || GITHUB + '/releases/latest')
</script>

<template>
  <section id="download" class="finale py-24 sm:py-32">
    <div class="wrap text-center">
      <h2 class="mx-auto max-w-[16ch] text-[clamp(36px,6vw,64px)] font-bold leading-[1.05] tracking-[-0.045em]">
        {{ t('cta.h') }}
      </h2>
      <p class="mx-auto mt-5 max-w-[36ch] text-[17px] text-muted">{{ t('cta.p') }}</p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a :href="downloadHref" class="btn btn-primary !min-h-12 !px-6 text-[16px]">{{ t('cta.download') }}</a>
        <a :href="GITHUB" class="btn btn-ghost" rel="noopener">
          <PhGithubLogo :size="16" :weight="'light'" />
          {{ t('cta.source') }}
        </a>
      </div>
    </div>
  </section>
</template>
