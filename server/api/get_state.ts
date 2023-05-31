import { defineEventHandler, readBody } from 'h3'
import store, { Vote } from '../store'

export default defineEventHandler(async (event) => {
  return store.getState()
})
