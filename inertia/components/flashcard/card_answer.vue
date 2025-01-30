<script setup>
import CodeBlock from '~/pages/shared/code_block.vue'

defineProps({
  answer: {
    type: String,
    required: true,
  },
  codeBlocks: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div>
    <div class="prose max-w-none mb-6" v-html="answer" />
    <div v-for="(block, index) in codeBlocks" :key="`answer-${index}`" class="mb-4">
      <CodeBlock :code="block.code" :language="block.language" />
    </div>
  </div>
</template>
