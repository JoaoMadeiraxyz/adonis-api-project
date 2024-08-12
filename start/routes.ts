/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')

router.get('/api/users/list', [UsersController, 'index'])
router.post('/api/users/store', [UsersController, 'store'])
router.put('/api/users/:id', [UsersController, 'update'])
router.delete('/api/users/:id', [UsersController, 'destroy'])
