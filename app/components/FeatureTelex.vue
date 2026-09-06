<script setup lang="ts">
import { METHOD_SAMPLES, type MethodId } from '~/lib/demo'

const { t } = useI18n()
const method = ref<MethodId>('telex')
const sample = computed(() => METHOD_SAMPLES[method.value])
</script>

<template>
  <section id="features" class="py-20 sm:py-28">
    <div class="wrap">
      <h2 class="section-h">{{ t('telex.h') }}</h2>
      <p class="section-p">{{ t('telex.p') }}</p>

      <div class="mt-8">
        <div class="seg" role="tablist">
          <button type="button" role="tab" :aria-pressed="method === 'telex'" @click="method = 'telex'">Telex</button>
          <button type="button" role="tab" :aria-pressed="method === 'vni'" @click="method = 'vni'">VNI</button>
          <button type="button" role="tab" :aria-pressed="method === 'simple_telex'" @click="method = 'simple_telex'">{{ t('telex.simple') }}</button>
        </div>
      </div>

      <div class="mt-8 grid items-end gap-6 border-t border-line pt-8 md:grid-cols-[1fr_auto_1fr]">
        <p class="font-mono text-[clamp(18px,2.4vw,26px)] tracking-tight text-muted">{{ sample.keys }}</p>
        <p class="hidden text-muted md:block" aria-hidden="true">→</p>
        <p class="text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.04em]" lang="vi">{{ sample.out }}</p>
      </div>
    </div>
  </section>
</template>
