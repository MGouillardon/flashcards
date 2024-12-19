<script setup>
import { Link } from '@inertiajs/vue3'

defineProps({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  }
})
</script>


<template>
  <header class="mb-8">
    <h1 class="text-3xl font-bold">{{ title }}</h1>
    <div class="text-sm breadcrumbs">
      <ul>
        <li><Link href="/">Decks</Link></li>
        <li>{{ category }}</li>
        <li>{{ filename.replace('.md', '') }}</li>
      </ul>
    </div>
  </header>
</template>