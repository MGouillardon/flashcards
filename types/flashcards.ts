export interface CodeBlock {
  language: string
  code: string
}

export interface Card {
  question: string
  answer: string
  tags: string[]
  codeBlocks: CodeBlock[]
  section: string
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
