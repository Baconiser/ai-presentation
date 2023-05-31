import { defineEventHandler, readBody } from 'h3'
import store, { Vote } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, vote, id  } = body
  const newVote: Vote = {
    id,
    userId,
    vote,
    correct: false
  }

  store.addVote(newVote)
  return newVote
})
