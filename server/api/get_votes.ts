import { defineEventHandler } from 'h3'
import store from '../store'

export default defineEventHandler(() => {
  return store.getVotes()
})
