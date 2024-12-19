import { ref, computed, Ref, ComputedRef } from 'vue'
import type { Deck, Card, Progress } from '#types/flashcards'

interface UseDeckNavigationReturn {
  currentCardIndex: Ref<number>
  showAnswer: Ref<boolean>
  progress: ComputedRef<Progress>
  currentCard: ComputedRef<Card>
  nextCard: () => void
  previousCard: () => void
  toggleAnswer: () => void
}

export function useDeckNavigation(deck: Deck): UseDeckNavigationReturn {
  const currentCardIndex = ref<number>(0)
  const showAnswer = ref<boolean>(false)

  const progress = computed<Progress>(() => ({
    current: currentCardIndex.value + 1,
    total: deck.cards.length,
    percentage: Math.round(((currentCardIndex.value + 1) / deck.cards.length) * 100),
  }))

  const currentCard = computed<Card>(() => deck.cards[currentCardIndex.value])

  const nextCard = (): void => {
    if (currentCardIndex.value < deck.cards.length - 1) {
      currentCardIndex.value++
      showAnswer.value = false
    }
  }

  const previousCard = (): void => {
    if (currentCardIndex.value > 0) {
      currentCardIndex.value--
      showAnswer.value = false
    }
  }

  const toggleAnswer = (): void => {
    showAnswer.value = !showAnswer.value
  }

  return {
    currentCardIndex,
    showAnswer,
    progress,
    currentCard,
    nextCard,
    previousCard,
    toggleAnswer,
  }
}
