import { onMounted, onUnmounted } from 'vue'

interface KeyboardControlsConfig {
  onToggleAnswer: () => void
  onNextCard: () => void
  onPreviousCard: () => void
  onRate: (score: number) => void
  isAnswerVisible: () => boolean
}

interface UseKeyboardControlsReturn {
  handleKeyPress: (event: KeyboardEvent) => void
}

export function useKeyboardControls({
  onToggleAnswer,
  onNextCard,
  onPreviousCard,
  onRate,
  isAnswerVisible,
}: KeyboardControlsConfig): UseKeyboardControlsReturn {
  const handleKeyPress = (event: KeyboardEvent): void => {
    switch (event.code) {
      case 'Space':
      case 'Enter':
        onToggleAnswer()
        break
      case 'ArrowRight':
        onNextCard()
        break
      case 'ArrowLeft':
        onPreviousCard()
        break
      case 'Digit1':
      case 'Digit2':
      case 'Digit3':
      case 'Digit4':
      case 'Digit5':
        if (isAnswerVisible()) {
          onRate(Number(event.key))
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

  return {
    handleKeyPress,
  }
}
