import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: ''
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: '你是谁' }],
    model: 'deepseek-chat'
  })

  console.log(completion.choices[0].message.content)
}

main()
