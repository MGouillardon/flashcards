<script setup>
import CodeBlock from '~/pages/shared/code_block.vue'

defineProps({
  question: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    default: () => [],
  },
  codeBlocks: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div class="mb-6">
    <h3 class="card-title mb-4">{{ question }}</h3>
    <div v-for="(block, index) in codeBlocks" :key="`question-${index}`" class="mb-4">
      <CodeBlock :code="block.code" :language="block.language" />
    </div>

    <div class="flex flex-wrap gap-2">
      <span v-for="tag in tags" :key="tag" class="badge badge-outline">
        {{ tag }}
      </span>
    </div>
  </div>
</template>
