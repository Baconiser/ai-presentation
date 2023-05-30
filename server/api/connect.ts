import store from '../store'
export default defineEventHandler(async (event) => {
    const res = event.node.res;
    // Enable SSE endpoint
    setHeader(event, 'cache-control', 'no-cache')
    setHeader(event, 'connection', 'keep-alive')
    setHeader(event, 'content-type', 'text/event-stream')
    setResponseStatus(event, 200);
    res.flushHeaders();

    const sendEvent = (data: any) => {
        console.log(`Event was sent`);
        res.cork();
        res.write(`id: ${ Date.now() }\n`);
        const temp = {...store};
        temp.listeners = [];
        res.write(`data: ${ JSON.stringify(temp) }\n\n`);
        res.uncork();
    }

    store.addListener(() => {
        console.log("Store updated, sending event");
        sendEvent(store.getVotes())
    });

    await new Promise((resolve) => {
        // Wait forever
    })
})
