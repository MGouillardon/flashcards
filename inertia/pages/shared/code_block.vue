<script setup>
import { onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'plaintext',
  },
})

onMounted(() => {
  hljs.highlightAll()
})
</script>

<template>
  <div class="overflow-x-auto w-full rounded-md">
    <pre class="rounded-lg"><code :class="[`language-${language}`, 'hljs']">{{ code }}</code></pre>
  </div>
</template>
