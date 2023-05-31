import { defineEventHandler, readBody } from 'h3'
import store from '../store'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { slideIdx } = body
  store.setCurrentSlideIdx(slideIdx)
  return slideIdx
})
