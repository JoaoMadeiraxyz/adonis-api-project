import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    return await User.all()
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const user: User = await User.create(request.all())

    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ request }: HttpContext) {
    const user: User | null = await User.find(request.param('id'))
    if (!user) {
      return null
    }

    if (request.input('name')) {
      user.name = request.input('name')
    }

    if (request.input('email')) {
      user.email = request.input('email')
    }

    if (request.input('password')) {
      user.password = request.input('password')
    }

    await user.save()
    return user
  }

  /**
   * Delete record
   */
  async destroy({ request }: HttpContext) {
    const user: User | null = await User.find(request.param('id'))

    if (!user) {
      return 'user not found'
    }

    await user.delete()

    return user
  }
}
