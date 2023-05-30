import store, { GifVote, Vote } from '../store'
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    let body = await readBody(event);
    const { slideIdx } = body;
    store.setCurrentSlideIdx(slideIdx)
    return slideIdx;
});
