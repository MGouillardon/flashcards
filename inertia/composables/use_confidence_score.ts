import { ref, Ref } from 'vue'

interface UseConfidenceScoreReturn {
  confidence: Ref<number>
  rateConfidence: (score: number, cardIndex: number) => void
  resetConfidence: () => void
  loadScore: (cardIndex: number) => void
}

interface StoredScores {
  [cardIndex: number]: number
}

export function useConfidenceScore(deckId: string): UseConfidenceScoreReturn {
  const confidence = ref<number>(0)
  const STORAGE_KEY = `deck_${deckId}_scores`

  const rateConfidence = (score: number, cardIndex: number): void => {
    confidence.value = score

    const scores: StoredScores = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    scores[cardIndex] = score
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores))
  }

  const resetConfidence = (): void => {
    confidence.value = 0
  }

  const loadScore = (cardIndex: number): void => {
    const scores: StoredScores = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    confidence.value = scores[cardIndex] || 0
  }

  return {
    confidence,
    rateConfidence,
    resetConfidence,
    loadScore,
  }
}
