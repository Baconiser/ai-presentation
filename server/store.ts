interface Vote {
    id: number;
    userId: string;
    vote: string;
    correct: boolean;
}

enum GifIds {
    "boo" = "boo",
    "huh" = "huh",
    "mindblow" = "mindblow",
    "nice" = "nice"
}

interface GifVote {
    userId: string;
    gifId: GifIds
    slideId: number;
}

interface Listener {
    (): void;
}

class Store {
    votes: Vote[] = [];
    gif_votes: GifVote[] = [];
    listeners: Listener[] = [];
    currentSlideIdx: number = 0;

    setCurrentSlideIdx(idx: number) {
        this.currentSlideIdx = idx;
        console.log(`Current slide idx is now ${idx}`);
        this.listeners.forEach(listener => listener());
    }

    addGifVote(vote: GifVote) {
        this.gif_votes.push(vote);
        console.log(`Gif vote added: ${JSON.stringify(vote)}`);
        this.listeners.forEach(listener => listener());
    }

    addVote(vote: Vote) {
        if (this.checkVoteExists(vote)) {
            return;
        }
        this.votes.push(vote);
        this.listeners.forEach(listener => listener());
    }

    checkVoteExists(vote: Vote) {
        return this.votes.find(v => v.userId === vote.userId && v.id === vote.id);
    }

    getVotes() {
        return this.votes;
    }

    getCurrentSlideIdx() {
        return this.currentSlideIdx;
    }

    addListener(listener: Listener) {
        this.listeners.push(listener);
    }
}

export default new Store();
export { Vote, Listener, GifVote, GifIds }
