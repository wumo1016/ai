import OpenAI from 'openai'

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: 'sk-1e41a2a34ae04a9094e0ebd0f05b36b6'
})

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'system', content: '你是谁' }],
    model: 'deepseek-chat'
  })

  console.log(completion.choices[0].message.content)
}

main()
