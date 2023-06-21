import { defineEventHandler, readBody } from 'h3'
import store, { GifVote, TriviaAnswer } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const {
    userId,
    gifId,
    answer,
    questionId,
    correct
  } = body
  const newVote: TriviaAnswer = {
    userId,
    correct,
    answer,
    questionId
  }
  store.addTriviaAnswer(newVote);
  return newVote
})
