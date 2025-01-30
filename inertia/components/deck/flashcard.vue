<script setup>
import CardQuestion from '~/components/flashcard/card_question.vue'
import CardAnswer from '~/components/flashcard/card_answer.vue'
import ConfidenceRating from '~/components/flashcard/confidence_rating.vue'

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
  showAnswer: {
    type: Boolean,
    default: false,
  },
  confidence: {
    type: Number,
    default: 0,
  },
})

const emit = defineEmits(['toggle', 'rate'])

const onToggleClick = () => {
  emit('toggle')
}

const onRateClick = (score) => {
  emit('rate', score)
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body p-8">
      <CardQuestion
        :question="card.question"
        :tags="card.tags"
        :code-blocks="card.questionCodeBlocks"
      />

      <div class="divider">Réponse</div>

      <div class="min-h-[100px] flex flex-col items-center justify-center" @click="onToggleClick">
        <div v-if="showAnswer" class="w-full">
          <CardAnswer :answer="card.answer" :code-blocks="card.answerCodeBlocks" />
          <ConfidenceRating :value="confidence" @rate="onRateClick" />
        </div>
        <button v-else class="btn btn-ghost">Voir la réponse</button>
      </div>
    </div>
  </div>
</template>
