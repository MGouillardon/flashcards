import { HttpContext } from '@adonisjs/core/http'
import { FlashcardParser } from '#services/flashcard_parser_service'

export default class FlashcardsController {
  private parser = new FlashcardParser()

  public async index({ inertia }: HttpContext) {
    const decks = await this.parser.listDecks()
    return inertia.render('index', { decks })
  }

  public async show({ params, inertia }: HttpContext) {
    const { category, filename } = params
    const deck = await this.parser.parse(category, filename)
    return inertia.render('deck', { deck })
  }
}
