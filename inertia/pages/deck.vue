<script setup>
import AppLayout from '~/layouts/app_layout.vue'
import CodeBlock from '~/pages/shared/code_block.vue'
import { Link } from '@inertiajs/vue3'
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  deck: {
    type: Object,
    required: true,
  },
})

const currentCardIndex = ref(0)
const showAnswer = ref(false)
const confidence = ref(0)

const progress = computed(() => ({
  current: currentCardIndex.value + 1,
  total: props.deck.cards.length,
  percentage: Math.round(((currentCardIndex.value + 1) / props.deck.cards.length) * 100),
}))

const currentCard = computed(() => props.deck.cards[currentCardIndex.value])

const nextCard = () => {
  if (currentCardIndex.value < props.deck.cards.length - 1) {
    currentCardIndex.value++
    showAnswer.value = false
    confidence.value = 0
  }
}

const previousCard = () => {
  if (currentCardIndex.value > 0) {
    currentCardIndex.value--
    showAnswer.value = false
    confidence.value = 0
  }
}

const toggleAnswer = () => {
  showAnswer.value = !showAnswer.value
}

const rateConfidence = (score) => {
  confidence.value = score
  // TODO: Sauvegarder le score dans le localStorage ou en base
}

const handleKeyPress = (event) => {
  switch (event.code) {
    case 'Space':
    case 'Enter':
      toggleAnswer()
      break
    case 'ArrowRight':
      nextCard()
      break
    case 'ArrowLeft':
      previousCard()
      break
    case 'Digit1':
    case 'Digit2':
    case 'Digit3':
    case 'Digit4':
    case 'Digit5':
      if (showAnswer.value) {
        rateConfidence(Number(event.key))
      }
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyPress)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyPress)
})
</script>

<template>
  <AppLayout>
    <div class="p-6">
      <header class="mb-8">
        <h1 class="text-3xl font-bold">{{ deck.title }}</h1>
        <div class="text-sm breadcrumbs">
          <ul>
            <li><Link href="/">Decks</Link></li>
            <li>{{ deck.category }}</li>
            <li>{{ deck.filename.replace('.md', '') }}</li>
          </ul>
        </div>
      </header>

      <div class="max-w-4xl mx-auto">
        <div class="flex flex-col items-center gap-2 mb-8">
          <progress
            class="progress progress-primary w-full transition-width duration-300 ease-in-out"
            :value="progress.current"
            :max="progress.total"
          ></progress>
          <div class="text-sm text-base-content/60">
            {{ progress.current }} / {{ progress.total }}
          </div>
        </div>

        <Transition
          mode="out-in"
          enter-from-class="opacity-0 translate-x-[50px]"
          enter-active-class="transition-all duration-300 ease-out"
          enter-to-class="opacity-100 translate-x-0"
          leave-from-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-to-class="opacity-0 translate-x-[-50px]"
        >
          <div :key="currentCardIndex" class="card bg-base-100 shadow-xl">
            <div class="card-body p-8">
              <div class="mb-6">
                <h3 class="card-title mb-4">{{ currentCard.question }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tag in currentCard.tags"
                    :key="tag"
                    class="badge badge-outline"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <div v-for="(block, index) in currentCard.codeBlocks" :key="index" class="mb-4">
                <CodeBlock :code="block.code" :language="block.language" />
              </div>

              <div class="divider">Réponse</div>

              <div
                class="min-h-[100px] flex flex-col items-center justify-center"
                @click="toggleAnswer"
              >
                <div v-if="showAnswer" class="w-full">
                  <div class="prose max-w-none mb-6" v-html="currentCard.answer" />

                  <div class="flex flex-col items-center gap-4 mt-8">
                    <p class="text-base-content/60">
                      Comment évaluez-vous votre compréhension ? (1-5)
                    </p>
                    <div class="flex gap-2">
                      <button
                        v-for="n in 5"
                        :key="n"
                        class="btn btn-circle"
                        :class="{
                          'btn-primary': confidence === n,
                          'btn-outline': confidence !== n,
                        }"
                        @click.stop="rateConfidence(n)"
                      >
                        {{ n }}
                      </button>
                    </div>
                  </div>
                </div>
                <button v-else class="btn btn-ghost">Voir la réponse</button>
              </div>
            </div>
          </div>
        </Transition>

        <div class="flex justify-between items-center mt-6">
          <button class="btn btn-circle" :disabled="currentCardIndex === 0" @click="previousCard">
            ←
          </button>

          <div class="text-sm text-base-content/60 text-center">
            <div>Espace ou Enter pour voir la réponse</div>
            <div>Flèches ← → pour naviguer</div>
            <div>1-5 pour noter votre compréhension</div>
          </div>

          <button
            class="btn btn-circle"
            :disabled="currentCardIndex === deck.cards.length - 1"
            @click="nextCard"
          >
            →
          </button>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
