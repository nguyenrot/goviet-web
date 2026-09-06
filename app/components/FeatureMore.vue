<script setup lang="ts">
import { PhLock } from '@phosphor-icons/vue'

const { t } = useI18n()
const hosts = ['Safari', 'Chrome', 'VS Code', 'Terminal', 'Messages', 'Notes', 'Slack']
const host = ref(0)
const expanded = ref(false)
const reduce = ref(true)
let hostTimer: ReturnType<typeof setTimeout> | undefined
let expandTimer: ReturnType<typeof setTimeout> | undefined
let gen = 0

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce.value) {
    expanded.value = true
    return
  }
  const my = ++gen
  const cycle = () => {
    if (my !== gen) return
    host.value = (host.value + 1) % hosts.length
    hostTimer = setTimeout(cycle, 1400)
  }
  hostTimer = setTimeout(cycle, 1400)
  expandTimer = setTimeout(() => {
    if (my !== gen) return
    expanded.value = true
  }, 900)
})
onBeforeUnmount(() => {
  gen += 1
  if (hostTimer) clearTimeout(hostTimer)
  if (expandTimer) clearTimeout(expandTimer)
})
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="wrap space-y-20">
      <div>
        <h2 class="section-h">{{ t('more.everywhereH') }}</h2>
        <p class="section-p">{{ t('more.everywhereP') }}</p>
        <p class="mt-8 font-sans text-[clamp(22px,3vw,32px)] font-semibold tracking-[-0.03em]" lang="vi">
          tiếng Việt
        </p>
        <ul class="mt-6 flex flex-wrap gap-2">
          <li
            v-for="(name, idx) in hosts"
            :key="name"
            class="rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors duration-500"
            :class="idx === host ? 'border-accent text-ink' : 'border-line text-muted'"
          >{{ name }}</li>
        </ul>
      </div>

      <div class="grid gap-16 lg:grid-cols-2">
        <div>
          <h3 class="text-[28px] font-bold tracking-[-0.03em] leading-tight">{{ t('more.macroH') }}</h3>
          <p class="mt-3 max-w-[42ch] text-[16px] leading-relaxed text-muted">{{ t('more.macroP') }}</p>
          <p class="mt-6 font-mono text-sm text-muted">{{ t('more.macroFrom') }}</p>
          <p class="mt-2 text-[32px] font-semibold tracking-[-0.03em]" lang="vi">
            {{ expanded ? t('more.macroTo') : t('more.macroFrom') }}
          </p>
        </div>
        <div>
          <h3 class="text-[28px] font-bold tracking-[-0.03em] leading-tight">{{ t('more.secureH') }}</h3>
          <p class="mt-3 max-w-[42ch] text-[16px] leading-relaxed text-muted">{{ t('more.secureP') }}</p>
          <div class="mt-6 flex items-center gap-3">
            <span class="inline-flex items-center gap-1 rounded-md bg-bg2 px-2 py-1 text-[12px] font-bold">
              <PhLock :size="14" :weight="'light'" />
            </span>
            <span class="font-mono tracking-[0.35em] text-muted">••••••••</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
