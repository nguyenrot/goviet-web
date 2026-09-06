<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class="py-20 sm:py-28 bg-bg2/60">
    <div class="wrap">
      <h2 class="section-h">{{ t('native.h') }}</h2>
      <p class="section-p">{{ t('native.p') }}</p>

      <div class="mt-12 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <MacWindow :title="t('native.winTitle')">
          <div class="flex gap-2 overflow-x-auto border-b border-line px-3 pt-2 text-[12px] font-medium text-muted">
            <span class="border-b-2 border-accent px-2 pb-2 text-ink">{{ t('native.tabGeneral') }}</span>
            <span class="px-2 pb-2">{{ t('native.tabTyping') }}</span>
            <span class="px-2 pb-2">{{ t('native.tabMacros') }}</span>
            <span class="px-2 pb-2">{{ t('native.tabApps') }}</span>
            <span class="px-2 pb-2">{{ t('native.tabAbout') }}</span>
          </div>
          <div class="space-y-4 px-5 py-5 text-[14px]">
            <label class="flex items-center justify-between gap-4">
              <span>{{ t('native.toggleVn') }}</span>
              <span class="h-5 w-9 rounded-full bg-accent p-0.5"><span class="ml-auto block h-4 w-4 rounded-full bg-white" /></span>
            </label>
            <div class="flex items-center justify-between gap-4">
              <span>{{ t('native.hotkey') }}</span>
              <span class="rounded-md border border-line bg-bg px-2 py-1 font-mono text-[12px]">⌃⇧</span>
            </div>
            <label class="flex items-center justify-between gap-4">
              <span>{{ t('native.remember') }}</span>
              <span class="h-5 w-9 rounded-full bg-accent p-0.5"><span class="ml-auto block h-4 w-4 rounded-full bg-white" /></span>
            </label>
            <label class="flex items-center justify-between gap-4">
              <span>{{ t('native.login') }}</span>
              <span class="h-5 w-9 rounded-full bg-bg2 p-0.5"><span class="block h-4 w-4 rounded-full bg-white" /></span>
            </label>
          </div>
        </MacWindow>

        <div class="mac-win max-w-sm">
          <div class="flex items-center justify-end gap-3 border-b border-line bg-bg2/80 px-3 py-2 text-[11px] font-bold">
            <span class="rounded bg-accent px-1.5 py-0.5 text-accent-ink">VI</span>
          </div>
          <ul class="py-2 text-[13px]">
            <li class="flex items-center justify-between px-4 py-2">
              <span>{{ t('native.menuToggle') }}</span>
              <span class="text-accent">✓</span>
            </li>
            <li class="px-4 py-1.5 text-muted">Telex</li>
            <li class="px-4 py-1.5 text-muted">VNI</li>
            <li class="px-4 py-1.5 text-muted">Simple Telex</li>
            <li class="mt-1 border-t border-line px-4 py-2">{{ t('native.menuSettings') }}</li>
            <li class="px-4 py-2">{{ t('native.menuQuit') }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
