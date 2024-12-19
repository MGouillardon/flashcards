import { readFile, readdir } from 'node:fs/promises'
import { join } from 'node:path'
import type { Card, Deck } from '#types/flashcards'

export class FlashcardParser {
  private basePath: string

  constructor() {
    this.basePath = join(process.cwd(), 'resources', 'flashcards')
  }

  public async listDecks(): Promise<string[]> {
    const categories = await readdir(this.basePath)
    const decks: string[] = []

    for (const category of categories) {
      const categoryPath = join(this.basePath, category)
      const files = await readdir(categoryPath)
      decks.push(...files.map((file) => `${category}/${file}`))
    }

    return decks
  }

  private async readMarkdownFile(category: string, filename: string): Promise<string> {
    const filePath = join(this.basePath, category, filename)
    return readFile(filePath, 'utf-8')
  }

  private getTitle(content: string): string {
    const match = content.match(/^# (.+)$/m)
    return match ? match[1] : ''
  }

  private parseSection(content: string): {
    title: string
    cards: Card[]
  }[] {
    content = content.replace(/^# .+\n/, '')

    const sections = content.split(/^## /m).filter(Boolean)

    return sections.map((section) => {
      const [title, ...sectionContent] = section.split('\n')
      const cardsContent = sectionContent.join('\n')

      return {
        title: title.trim(),
        cards: this.parseCards(cardsContent, title.trim()),
      }
    })
  }

  private parseCards(content: string, section: string): Card[] {
    const cardBlocks = content.split(/^### /m).filter(Boolean)

    return cardBlocks
      .map((block) => {
        const [questionLine, ...rest] = block.split('\n')
        const question = questionLine.replace('Q:', '').trim()

        if (!question) return null

        const answerStart = rest.findIndex((line) => line.startsWith('A:'))
        if (answerStart === -1) return null

        const answerLines = rest.slice(answerStart)
        const tagsIndex = answerLines.findIndex((line) => line.includes('Tags:'))
        const answer = answerLines
          .slice(0, tagsIndex !== -1 ? tagsIndex : undefined)
          .join('\n')
          .replace('A:', '')
          .trim()

        return {
          question,
          answer,
          tags: this.extractTags(block),
          codeBlocks: this.extractCodeBlocks(block),
          section,
        }
      })
      .filter((card): card is Card => card !== null)
  }

  private extractTags(content: string): string[] {
    const tagsLine = content.split('\n').find((line) => line.includes('Tags:'))
    if (!tagsLine) return []

    const tags = tagsLine.match(/#[\w-]+/g) || []
    return tags.map((tag) => tag.replace('#', ''))
  }

  private extractCodeBlocks(content: string): { language: string; code: string }[] {
    const matches = content.match(/```[\s\S]*?```/g) || []

    return matches.map((block) => {
      const [firstLine, ...codeLines] = block.split('\n')
      codeLines.pop()

      return {
        language: firstLine.replace('```', '').trim(),
        code: codeLines.join('\n'),
      }
    })
  }

  public async parse(category: string, filename: string): Promise<Deck> {
    const content = await this.readMarkdownFile(category, filename)
    const title = this.getTitle(content)
    const sections = this.parseSection(content)

    return {
      title,
      category,
      filename,
      cards: sections.flatMap((section) => section.cards),
    }
  }
}
