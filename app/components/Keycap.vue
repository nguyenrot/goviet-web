<script setup lang="ts">
defineProps<{
  keys: string[]
  pressed?: boolean
}>()
</script>

<template>
  <span class="inline-flex items-center gap-1" aria-hidden="true">
    <kbd v-for="k in keys" :key="k" class="kcap" :class="{ 'is-down': pressed }">{{ k }}</kbd>
  </span>
</template>
