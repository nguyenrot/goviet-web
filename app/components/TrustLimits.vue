<script setup lang="ts">
import { GITHUB_LIMITS } from '~/lib/site'

const { t } = useI18n()
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="wrap grid gap-16 lg:grid-cols-2">
      <div>
        <h2 class="section-h">{{ t('trust.h') }}</h2>
        <p class="section-p">{{ t('trust.p') }}</p>
        <ul class="mt-8 max-w-[50ch] space-y-4 text-[16px] leading-relaxed text-muted">
          <li>{{ t('trust.open') }}</li>
          <li>{{ t('trust.local') }}</li>
          <li>{{ t('trust.noClaim') }}</li>
        </ul>
      </div>
      <div>
        <h2 class="section-h">{{ t('limits.h') }}</h2>
        <p class="section-p">{{ t('limits.p') }}</p>
        <a :href="GITHUB_LIMITS" class="mt-6 inline-block text-[15px] font-semibold underline underline-offset-4" rel="noopener">
          {{ t('limits.link') }}
        </a>
      </div>
    </div>
  </section>
</template>
