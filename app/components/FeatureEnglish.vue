<script setup lang="ts">
import { ENGLISH_CASES } from '~/lib/demo'

const { t } = useI18n()
const i = ref(0)
const phase = ref<'raw' | 'wrong' | 'right'>('raw')
const reduce = ref(true)
let timer: ReturnType<typeof setTimeout> | undefined
let gen = 0

const current = computed(() => ENGLISH_CASES[i.value] ?? ENGLISH_CASES[0])
const shown = computed(() => {
  const c = current.value
  if (phase.value === 'wrong') return c.wrong
  if (phase.value === 'right') return c.right
  return c.raw
})

function loop() {
  const my = ++gen
  const tick = (next: () => void, ms: number) => {
    timer = setTimeout(() => {
      if (my !== gen) return
      next()
    }, ms)
  }
  phase.value = 'raw'
  tick(() => {
    phase.value = 'wrong'
    tick(() => {
      phase.value = 'right'
      tick(() => {
        i.value = (i.value + 1) % ENGLISH_CASES.length
        loop()
      }, 1400)
    }, 900)
  }, 1100)
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!reduce.value) loop()
  else {
    phase.value = 'right'
  }
})
onBeforeUnmount(() => {
  gen += 1
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section class="py-20 sm:py-28 bg-bg2/60">
    <div class="wrap">
      <h2 class="section-h">{{ t('english.h') }}</h2>
      <p class="section-p">{{ t('english.p') }}</p>
      <p class="sr-only">{{ t('english.a11y') }}</p>

      <div class="mt-10 max-w-xl">
        <p class="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
          <template v-if="phase === 'wrong'">{{ t('english.wrong') }}</template>
          <template v-else-if="phase === 'right'">{{ t('english.right') }}</template>
          <template v-else>{{ t('english.typing') }}</template>
        </p>
        <p class="mt-3 font-sans text-[clamp(36px,6vw,64px)] font-semibold tracking-[-0.04em] leading-none">
          <span :class="{ snap: phase !== 'raw' }">{{ shown }}</span>
        </p>
        <p class="mt-6 font-mono text-sm text-muted">{{ current.raw }}</p>
      </div>
    </div>
  </section>
</template>
