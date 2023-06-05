enum SlideType {
   'Boring' = 'Boring',
   'Login' = 'Login',
   'None' = 'None',
   'Vote' = 'Vote',
   'ImageTinder' = 'ImageTinder'
}

const slides = [
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Boring
  },
  {
    type: SlideType.Login
  },
  {
    type: SlideType.None
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.None
  },
  {
    type: SlideType.ImageTinder
  },
  {
    type: SlideType.Vote
  },
  {
    type: SlideType.None
  }
]

export const noSlides = slides.map((slide, idx) => {
  if (slide.type === SlideType.None) {
    return idx
  }
  return false
}).filter(s => s)

export const voteSlides = slides.map((slide, idx) => {
  if (slide.type === SlideType.Vote) {
    return idx
  }
  return false
}).filter(s => s)

export const loginSlide = slides.map((slide, idx) => {
  if (slide.type === SlideType.Login) {
    return idx
  }
  return false
}).filter(s => s)

export const imageTinderSlide = slides.map((slide, idx) => {
  if (slide.type === SlideType.ImageTinder) {
    return idx
  }
  return false
}).filter(s => s)
