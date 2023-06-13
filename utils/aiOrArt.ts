import ai1 from '@/assets/images/quiz/ai/1.png'
import ai2 from '@/assets/images/quiz/ai/2.png'
import ai3 from '@/assets/images/quiz/ai/3.png'
import ai4 from '@/assets/images/quiz/ai/4.png'
import ai5 from '@/assets/images/quiz/ai/5.png'
import ai6 from '@/assets/images/quiz/ai/6.png'

import ar1 from '@/assets/images/quiz/artist/1.png'
import ar2 from '@/assets/images/quiz/artist/2.png'
import ar3 from '@/assets/images/quiz/artist/3.png'
import ar4 from '@/assets/images/quiz/artist/4.png'
import ar5 from '@/assets/images/quiz/artist/5.png'
import ar6 from '@/assets/images/quiz/artist/6.png'

class AiOrArt {
  image: string
  type: 'AI' | 'Artist'

  constructor (image: string, type: 'AI' | 'Artist') {
    this.image = image
    this.type = type
  }
}

const ai = [ai1, ai2, ai3, ai4, ai5, ai6]
const artist = [ar1, ar2, ar3, ar4, ar5, ar6]

// shuffle the pictures
const images = ai.map(i => new AiOrArt(i, 'AI')).concat(artist.map(i => new AiOrArt(i, 'Artist'))).sort(() => Math.random() - 0.5)

export { ai, artist, AiOrArt, images }
