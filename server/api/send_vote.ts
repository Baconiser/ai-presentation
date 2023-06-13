import { defineEventHandler, readBody } from 'h3'
import store, { Vote } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, vote, content } = body
  const newVote: Vote = {
    id: content.image,
    userId,
    vote,
    correct: content.type == vote
  }
  store.addVote(newVote)
  return newVote
})
