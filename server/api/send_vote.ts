import { defineEventHandler, readBody } from 'h3'
import store, { Vote } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, vote } = body
  const newVote: Vote = {
    id: 1,
    userId,
    vote,
    correct: false
  }
  console.log('VOTE RECEIVED', newVote)
  store.addVote(newVote)
  return newVote
})
