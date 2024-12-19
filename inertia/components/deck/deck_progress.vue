<script setup>
defineProps({
  current: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})
</script>

<template>
  <div class="flex flex-col items-center gap-2 mb-8">
    <progress class="progress progress-primary w-full" :value="current" :max="total"></progress>
    <div class="text-sm text-base-content/60">{{ current }} / {{ total }}</div>
  </div>
</template>
