<script setup lang="ts">
import { HERO_FINAL_VI, HERO_SCRIPT, HERO_SOURCE, type Mode } from '~/lib/demo'

const { t } = useI18n()

const text = ref(HERO_FINAL_VI)
const mode = ref<Mode>('VI')
const chord = ref<string[] | null>(null)
const snap = ref(false)
const playing = ref(false)
const reduce = ref(true)

let timer: ReturnType<typeof setTimeout> | undefined
let gen = 0

function stop() {
  if (timer) clearTimeout(timer)
  timer = undefined
}

function showStatic() {
  stop()
  text.value = HERO_FINAL_VI
  mode.value = 'VI'
  chord.value = null
  snap.value = false
  playing.value = false
}

function play() {
  stop()
  const my = ++gen
  playing.value = true
  let i = 0

  const step = () => {
    if (my !== gen) return
    const op = HERO_SCRIPT[i]
    if (!op) {
      timer = setTimeout(() => {
        if (my !== gen) return
        play()
      }, 900)
      return
    }
    text.value = op.text
    mode.value = op.mode
    chord.value = op.chord ?? null
    snap.value = Boolean(op.snap)
    i += 1
    timer = setTimeout(step, op.hold)
  }
  step()
}

function replay() {
  if (reduce.value) {
    showStatic()
    return
  }
  play()
}

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce.value) showStatic()
  else play()
})

onBeforeUnmount(() => {
  gen += 1
  stop()
})
</script>

<template>
  <div>
    <p class="sr-only">{{ t('hero.a11y') }}</p>
    <MacWindow :title="t('hero.winTitle')">
      <div class="relative px-5 py-6 sm:px-8 sm:py-8 min-h-[168px] sm:min-h-[200px]">
        <div class="absolute right-4 top-4 flex items-center gap-2">
          <span
            class="inline-flex min-w-[2.25rem] justify-center rounded-md px-2 py-0.5 text-[11px] font-bold tracking-wide"
            :class="mode === 'VI' ? 'bg-accent text-accent-ink' : 'bg-bg2 text-muted'"
          >{{ mode }}</span>
        </div>

        <p
          class="font-sans text-[22px] sm:text-[28px] leading-snug tracking-[-0.03em] font-medium pr-16"
          :lang="mode === 'VI' ? 'vi' : 'en'"
        >
          <span :class="{ snap: snap }">{{ text }}</span><span class="caret" aria-hidden="true" />
        </p>

        <div class="mt-8 flex flex-wrap items-center justify-between gap-3 text-[12px] text-muted">
          <p class="max-w-[min(100%,28rem)] break-all font-mono leading-relaxed">
            <span v-if="mode === 'VI'">{{ HERO_SOURCE }}</span>
            <span v-else>EN</span>
          </p>
          <div class="flex items-center gap-3">
            <Keycap v-if="chord" :keys="chord" pressed />
            <button type="button" class="font-semibold text-ink underline-offset-4 hover:underline" @click="replay">
              {{ t('hero.replay') }}
            </button>
          </div>
        </div>
      </div>
    </MacWindow>
  </div>
</template>
