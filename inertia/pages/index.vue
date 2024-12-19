<script setup>
import { computed } from 'vue'
import AppLayout from '~/layouts/app_layout.vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
  decks: {
    type: Array,
    required: true,
  },
})

const groupedDecks = computed(() => {
  return props.decks.reduce((acc, deckPath) => {
    const [category] = deckPath.split('/')

    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(deckPath)
    return acc
  }, {})
})
</script>

<template>
  <AppLayout>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-8">Flashcards</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(paths, category) in groupedDecks"
          :key="category"
          class="card bg-base-100 shadow-xl"
        >
          <div class="card-body">
            <h2 class="card-title capitalize">{{ category }}</h2>
            <ul class="menu rounded-box">
              <li v-for="path in paths" :key="path">
                <Link :href="`/flashcards/${path}`" class="bg-base-200 hover:bg-base-300">
                  {{ path.split('/')[1].replace('.md', '') }}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
