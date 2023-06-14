import { defineEventHandler } from 'h3'
import store from '../store'
import axios from 'axios'
import { createWriteStream } from 'fs'

export default defineEventHandler(async () => {
  let users = store.getUsers()
  if (store.getPoemName() || store.isCreatingPoem()) {
    return
  }
  store.setCreatingPoem(true)
  const userNames = users.map((user) => user.name)
  const prompt = `
  Du bist eine mischung aus goethe und schiller.
  Quirin und Michael Hielten eine Präsentation über KI und die Zukunft der Arbeit.
  Die Präsentation war für die Arbeitskollegen der W.E.B. Wirth EDV Beratung.
  Für den Schluss der Präsentation wird ein sich reimendes kurzes Gedicht für die Kollegen erstellt.
  Das gedicht soll die Namen der Kollegen in witziger Art und Weise beinhalten.
  Gehe nicht auf genaue tätigkeiten oder Persönlichkeiten ein.
  Schreibe zu jedem namen einen sich reimenden Satz. Der Reim muss sich auf den Namen beziehen.
  Gib nur das Gedicht aus, sonst nichts.
  Zum schluss des gedichtes soll gesagt werden dass sich Michael und Quirin auf die für die Aufmerksamkeit bedanken.
  Namen: ${userNames}
  Gedicht: 
  `
  return await doThings(prompt, 0)

})

async function doThings (prompt: string, versuch: number): Promise<any> {
  try {

    if (versuch > 3) {
      return createError('Failed to create poem after 3 Tries')
    }

    let poemText = store.getPoemText()
    if (!poemText) {
      let { choices } = await callOpenAi(prompt)
      const [choice] = choices
      const { message: { content } } = choice
      poemText = content
      store.setPoemText(content)
    }

    const audio = await call11Labs(poemText as string)
    // save binary audio to /public/audio and return the name of the file
    const fileName = `${Date.now()}.mp3`
    store.setPoemName(fileName)

    audio.pipe(createWriteStream(`./public/${fileName}`))
    return fileName
  } catch (e) {
    versuch++
    return doThings(prompt, versuch)
  }
}

async function call11Labs (text: string) {
  try {

    const response = await axios.post(`https://api.elevenlabs.io/v1/text-to-speech/pNInz6obpgDQGcFmaJgB/stream`, {
      text,
      model_id: 'eleven_multilingual_v1',
      voice_settings: {
        stability: 0,
        similarity_boost: 0
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Xi-Api-Key': process.env.ELEVENLABS_KEY
      },
      responseType: 'stream'
    })

    return response.data
  } catch
    (error) {
    console.error(error, '11labs')
  }
}

async function callOpenAi (content: string) {

  const result = await axios.post('https://openai-proxy-ls.deno.dev/api/chat/complete',
    // @ts-ignore
    {
      apiKey: process.env.OPENAI_KEY,
      model: 'gpt-4',
      messages: [{
        role: 'user',
        content
      }],
      temperature: 1,
      maxTokens: 2000,
      topP: 0.7,
    }
  )
  return result.data
}
