import store from '../store'

export default defineEventHandler(async (event) => {
    const res = event.node.res;
    // Enable SSE endpoint
    setHeader(event, 'cache-control', 'no-cache')
    setHeader(event, 'connection', 'keep-alive')
    setHeader(event, 'content-type', 'text/event-stream')
    setResponseStatus(event, 204);
    res.flushHeaders();


    let counter = 0

    const sendEvent = (data: any) => {
        console.log(`Event ${ counter } was sent`);

        res.write(`id: ${ ++counter }\n`);
        res.write(`data: ${ JSON.stringify(store.getVotes()) }\n\n`);

    }

    store.addListener(() => {
        console.log("Store updated, sending event");
        sendEvent(store.getVotes())
    });

    await new Promise((resolve) => {
        // Wait forever
    })
})
