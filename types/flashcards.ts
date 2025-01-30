export interface CodeBlock {
  language: string
  code: string
}

export interface Card {
  question: string
  answer: string
  tags: string[]
  section: string
  questionCodeBlocks: CodeBlock[]
  answerCodeBlocks: CodeBlock[]
}

export interface Deck {
  title: string
  category: string
  filename: string
  cards: Card[]
}

export interface Progress {
  current: number
  total: number
  percentage: number
}
