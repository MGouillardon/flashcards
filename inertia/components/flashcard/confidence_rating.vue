<script setup>
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['rate'])

const onRateClick = (score) => {
  emit('rate', score)
}
</script>

<template>
  <div class="flex flex-col items-center gap-4 mt-8">
    <p class="text-base-content/60">Comment évaluez-vous votre compréhension ? (1-5)</p>
    <div class="flex gap-2">
      <button
        v-for="n in 5"
        :key="n"
        class="btn btn-circle"
        :class="{
          'btn-primary': value === n,
          'btn-outline': value !== n,
        }"
        @click.stop="onRateClick(n)"
      >
        {{ n }}
      </button>
    </div>
  </div>
</template>
