interface Vote {
  id: string;
  userId: string;
  vote: string;
  correct: boolean;
}

enum GifIds {
  'boo' = 'boo',
  'huh' = 'huh',
  'mindblow' = 'mindblow',
  'nice' = 'nice'
}

interface GifVote {
  userId: string;
  gifId: GifIds
  slideId: number;
}

interface Listener {
  (): void;
}

interface User {
  id: string;
  name: string;
}

class Store {
  votes: Vote[] = []
  gif_votes: GifVote[] = []
  listeners: Listener[] = []
  currentSlideIdx = 0
  users: User[] = []

  setCurrentSlideIdx (idx: number) {
    this.currentSlideIdx = idx
    this.emitToAll()
  }

  resetStore () {
    this.votes = []
    this.gif_votes = []
    this.currentSlideIdx = 0
    this.users = []
    this.emitToAll()
  }

  emitToAll () {
    this.listeners.forEach(listener => listener())
  }

  addUser (user: User) {
    if (this.doesUserExist(user)) {
      this.renameUser(user)
      return
    }
    this.emitToAll()
    this.users.push(user)
  }

  renameUser (user: User) {
    this.users = this.users.map((u) => {
      if (u.id === user.id) {
        return user
      }
      return u
    })
    this.emitToAll()
  }

  doesUserExist (user: User) {
    return this.users.find(u => u.id === user.id)
  }

  addGifVote (vote: GifVote) {
    this.gif_votes.push(vote)
    console.log(`Gif vote added: ${JSON.stringify(vote)}`)
    this.emitToAll()
  }

  addVote (vote: Vote) {
    if (this.checkVoteExists(vote)) {
      return
    }
    this.votes.push(vote)
    this.emitToAll()
  }

  checkVoteExists (vote: Vote) {
    return this.votes.find(v => v.userId === vote.userId && v.id === vote.id)
  }

  getVotes () {
    return this.votes
  }

  getCurrentSlideIdx () {
    return this.currentSlideIdx
  }

  addListener (listener: Listener) {
    this.listeners.push(listener)
  }

  getState () {
    return {
      votes: this.votes,
      gif_votes: this.gif_votes,
      currentSlideIdx: this.currentSlideIdx,
      users: this.users
    }
  }
}

export default new Store()
export { Vote, Listener, GifVote, GifIds, User }
