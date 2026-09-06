<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="mac-win">
    <div class="mac-titlebar">
      <div class="mac-dots" aria-hidden="true">
        <i /><i /><i />
      </div>
      <div class="mac-title">{{ title }}</div>
      <div class="w-[42px]" aria-hidden="true" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
