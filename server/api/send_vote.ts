import store, { Vote } from '../store'
import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
    let body = await readBody(event);
    const { userId, vote } = body;
    const newVote: Vote = {
        id: 1,
        userId,
        vote,
        correct: false
    };
    store.addVote(newVote);
    return newVote;
});
