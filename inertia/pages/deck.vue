<script setup>
import AppLayout from '~/layouts/app_layout.vue'
import { useDeckNavigation } from '~/composables/use_deck_navigation'
import { useConfidenceScore } from '~/composables/use_confidence_score'
import { useKeyboardControls } from '~/composables/use_keyboard_controls'
import DeckHeader from '~/components/deck/deck_header.vue'
import DeckProgress from '~/components/deck/deck_progress.vue'
import FlashCard from '~/components/deck/flashcard.vue'
import DeckNavigation from '~/components/deck/deck_navigation.vue'

const props = defineProps({
  deck: {
    type: Object,
    required: true,
  },
})

const {
  currentCardIndex,
  showAnswer,
  progress,
  currentCard,
  nextCard,
  previousCard,
  toggleAnswer,
} = useDeckNavigation(props.deck)

const { confidence, rateConfidence, resetConfidence, loadScore } = useConfidenceScore(
  props.deck.filename
)

useKeyboardControls({
  onToggleAnswer: toggleAnswer,
  onNextCard: nextCard,
  onPreviousCard: previousCard,
  onRate: (score) => rateConfidence(score, currentCardIndex.value),
  isAnswerVisible: () => showAnswer.value,
})
</script>

<template>
  <AppLayout>
    <div class="p-6">
      <DeckHeader :title="deck.title" :category="deck.category" :filename="deck.filename" />

      <div class="max-w-4xl mx-auto">
        <DeckProgress :current="progress.current" :total="progress.total" />

        <Transition
          mode="out-in"
          enter-from-class="opacity-0 translate-x-[50px]"
          enter-active-class="transition-all duration-300 ease-out"
          enter-to-class="opacity-100 translate-x-0"
          leave-from-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300 ease-in"
          leave-to-class="opacity-0 translate-x-[-50px]"
        >
          <FlashCard
            :key="currentCardIndex"
            :card="currentCard"
            :show-answer="showAnswer"
            :confidence="confidence"
            @toggle="toggleAnswer"
            @rate="(score) => rateConfidence(score, currentCardIndex)"
          />
        </Transition>

        <DeckNavigation
          :can-go-back="currentCardIndex > 0"
          :can-go-forward="currentCardIndex < deck.cards.length - 1"
          @previous="previousCard"
          @next="nextCard"
        />
      </div>
    </div>
  </AppLayout>
</template>
