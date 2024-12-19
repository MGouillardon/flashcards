<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['next', 'previous'])
</script>

<template>
  <div class="flex justify-between items-center mt-6">
    <button class="btn btn-circle" :disabled="!canGoBack" @click="emit('previous')">←</button>

    <div class="text-sm text-base-content/60 text-center">
      <div>Espace ou Enter pour voir la réponse</div>
      <div>Flèches ← → pour naviguer</div>
      <div>1-5 pour noter votre compréhension</div>
    </div>

    <button class="btn btn-circle" :disabled="!canGoForward" @click="emit('next')">→</button>
  </div>
</template>
