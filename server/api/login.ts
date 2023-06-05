import { defineEventHandler, readBody } from 'h3'
import store, { User } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, name } = body
  const user: User = {
    id: userId,
    name
  }
  store.addUser(user)
  return user
})
