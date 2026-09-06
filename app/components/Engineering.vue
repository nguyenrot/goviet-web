<script setup lang="ts">
import { PhArrowRight } from '@phosphor-icons/vue'
import { GITHUB } from '~/lib/site'

const { t } = useI18n()
const steps = computed(() => [
  t('engine.step1'),
  t('engine.step2'),
  t('engine.step3'),
  t('engine.step4'),
])
</script>

<template>
  <section class="py-20 sm:py-28 bg-bg2/60">
    <div class="wrap">
      <h2 class="section-h">{{ t('engine.h') }}</h2>
      <p class="section-p">{{ t('engine.p') }}</p>

      <ol class="mt-12 max-w-xl">
        <li v-for="label in steps" :key="label" class="border-t border-line py-5">
          <p class="text-[20px] font-semibold tracking-[-0.03em]">{{ label }}</p>
        </li>
      </ol>

      <p class="mt-6 text-[13px] text-muted">{{ t('engine.note') }}</p>
      <a :href="GITHUB" class="btn btn-ghost mt-6" rel="noopener">
        {{ t('engine.cta') }}
        <PhArrowRight :size="16" :weight="'light'" />
      </a>
    </div>
  </section>
</template>
