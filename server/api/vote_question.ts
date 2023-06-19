import { defineEventHandler, readBody } from 'h3'
import store, { GifVote } from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { userId, gifId } = body
  const newVote: GifVote = {
    userId,
    gifId,
    slideId: store.getCurrentSlideIdx()
  }
  store.addGifVote(newVote)
  return newVote
})
