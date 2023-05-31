import store from '../store'
export default defineEventHandler(async (event) => {
  const res = event.node.res
  // Enable SSE endpoint
  setHeader(event, 'cache-control', 'no-cache')
  setHeader(event, 'connection', 'keep-alive')
  setHeader(event, 'content-type', 'text/event-stream')
  setResponseStatus(event, 200)
  res.flushHeaders()

  const sendEvent = () => {
    res.cork()
    res.write(`id: ${Date.now()}\n`)
    res.write(`data: ${JSON.stringify(store.getState())}\n\n`)
    res.uncork()
  }

  store.addListener(sendEvent)

  await new Promise(() => {
    // Wait forever
  })
})
