import { defineEventHandler, readBody } from 'h3'
import store, { GifVote } from '../store'

export default defineEventHandler(async (event) => {
  store.resetStore()
  return true
})
