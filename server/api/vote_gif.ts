import store, { GifVote, Vote } from '../store'
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    let body = await readBody(event);
    const { userId, gifId } = body;
    const newVote: GifVote = {
        userId,
        gifId,
        slideId: store.getCurrentSlideIdx(),
    };
    store.addGifVote(newVote);
    return newVote;
});
