<script setup lang="ts">
import { GITHUB } from '~/lib/site'

const { t } = useI18n()
const { data: release } = useRelease()
const downloadHref = computed(() => release.value?.downloadUrl || GITHUB + '/releases/latest')

const steps = computed(() => [
  { title: t('install.s1t'), body: t('install.s1d') },
  { title: t('install.s2t'), body: t('install.s2d') },
  { title: t('install.s3t'), body: t('install.s3d') },
  { title: t('install.s4t'), body: t('install.s4d') },
])
</script>

<template>
  <section id="install" class="py-20 sm:py-28">
    <div class="wrap">
      <h2 class="section-h">{{ t('install.h') }}</h2>
      <p class="section-p">{{ t('install.p') }}</p>

      <ol class="mt-12 grid gap-10 md:grid-cols-2">
        <li v-for="(s, i) in steps" :key="s.title" class="border-t border-line pt-5">
          <p class="text-[13px] font-semibold text-accent">{{ s.title }}</p>
          <p class="mt-3 max-w-[46ch] text-[16px] leading-relaxed text-muted">{{ s.body }}</p>
          <a
            v-if="i === 0"
            :href="downloadHref"
            class="btn btn-primary mt-5 !min-h-10 text-[13px]"
          >{{ t('nav.download') }}</a>
        </li>
      </ol>

      <div class="mt-14 max-w-lg">
        <MacWindow :title="t('install.privacy')">
          <div class="px-5 py-5 text-[13px]">
            <p class="font-semibold">GoViet.app</p>
            <p class="mt-2 max-w-[40ch] text-muted">
              {{ t('install.s3d') }}
            </p>
            <p class="mt-4 inline-flex rounded-full bg-accent px-3 py-1.5 text-[12px] font-semibold text-accent-ink">
              {{ t('install.openAnyway') }}
            </p>
          </div>
        </MacWindow>
      </div>
    </div>
  </section>
</template>
