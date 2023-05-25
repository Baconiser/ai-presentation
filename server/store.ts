interface Vote {
    id: number;
    userId: string;
    vote: string;
    correct: boolean;
}

interface Listener {
    (): void;
}

class Store {
    votes: Vote[] = [];
    listeners: Listener[] = [];

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

    addListener(listener: Listener) {
        this.listeners.push(listener);
    }
}

export default new Store();
export { Vote, Listener }
