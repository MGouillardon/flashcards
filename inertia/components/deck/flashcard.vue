<script setup>
import CodeBlock from '~/pages/shared/code_block.vue'

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
      <div class="mb-6">
        <h3 class="card-title mb-4">{{ card.question }}</h3>
        <div
          v-for="(block, index) in card.questionCodeBlocks"
          :key="`question-${index}`"
          class="mb-4"
        >
          <CodeBlock :code="block.code" :language="block.language" />
        </div>

        <div class="flex flex-wrap gap-2">
          <span v-for="tag in card.tags" :key="tag" class="badge badge-outline">
            {{ tag }}
          </span>
        </div>
      </div>

      <div class="divider">Réponse</div>

      <div class="min-h-[100px] flex flex-col items-center justify-center" @click="onToggleClick">
        <div v-if="showAnswer" class="w-full">
          <div class="prose max-w-none mb-6" v-html="card.answer" />

          <div
            v-for="(block, index) in card.answerCodeBlocks"
            :key="`answer-${index}`"
            class="mb-4"
          >
            <CodeBlock :code="block.code" :language="block.language" />
          </div>

          <div class="flex flex-col items-center gap-4 mt-8">
            <p class="text-base-content/60">Comment évaluez-vous votre compréhension ? (1-5)</p>
            <div class="flex gap-2">
              <button
                v-for="n in 5"
                :key="n"
                class="btn btn-circle"
                :class="{
                  'btn-primary': confidence === n,
                  'btn-outline': confidence !== n,
                }"
                @click.stop="onRateClick(n)"
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
</template>
