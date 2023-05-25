import store from '../store'

export default defineEventHandler(async (event) => {

    // Enable SSE endpoint
    setHeader(event, 'cache-control', 'no-cache')
    setHeader(event, 'connection', 'keep-alive')
    setHeader(event, 'content-type', 'text/event-stream')
    setResponseStatus(event, 204);

    let counter = 0

    const sendEvent = (data: any) => {
        event.node.res.write(`id: ${ ++counter }\n`);
        event.node.res.write(`data: ${ JSON.stringify(store.getVotes()) }\n\n`);
    }

    store.addListener(() => {
        sendEvent(store.getVotes())
    });

    await new Promise((resolve) => {
        // Wait forever
    })
})
