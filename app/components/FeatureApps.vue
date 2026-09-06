<script setup lang="ts">
const { t } = useI18n()

const apps = [
  { name: 'Safari', mode: 'VI' as const },
  { name: 'Terminal', mode: 'EN' as const },
  { name: 'Messages', mode: 'VI' as const },
  { name: 'VS Code', mode: 'EN' as const },
]

const active = ref(0)
const reduce = ref(true)
let timer: ReturnType<typeof setTimeout> | undefined
let gen = 0

onMounted(() => {
  reduce.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce.value) return
  const my = ++gen
  const tick = () => {
    if (my !== gen) return
    active.value = (active.value + 1) % apps.length
    timer = setTimeout(tick, 1600)
  }
  timer = setTimeout(tick, 1600)
})
onBeforeUnmount(() => {
  gen += 1
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="wrap">
      <h2 class="section-h">{{ t('apps.h') }}</h2>
      <p class="section-p">{{ t('apps.p') }}</p>

      <ul class="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
        <li
          v-for="(app, idx) in apps"
          :key="app.name"
          class="bg-surface p-5 sm:p-6 transition-colors duration-500"
          :class="idx === active ? 'bg-bg2' : ''"
        >
          <p class="text-[15px] font-semibold tracking-[-0.02em]">{{ app.name }}</p>
          <p
            class="mt-4 inline-flex min-w-[2.25rem] justify-center rounded-md px-2 py-0.5 text-[11px] font-bold"
            :class="app.mode === 'VI' ? 'bg-accent text-accent-ink' : 'bg-bg2 text-muted'"
          >{{ app.mode }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
