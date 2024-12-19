/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const FlashcardsController = () => import('#controllers/flashcard_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [FlashcardsController, 'index'])
router.get('/flashcards/:category/:filename', [FlashcardsController, 'show'])
