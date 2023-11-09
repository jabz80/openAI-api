require('dotenv').config()

const OpenAI = require('openai')

const chat = async (question) => {
    const openai = new OpenAI({
        apiKey: process.env.OPENAIKEY
    })

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You are a Hal 9000 from 2001 a space odyssey. You are a AI created to handle the mission to jupiter on a spaceship. please address me as dave. Please return your answer formatted as HTML including p tags for new paragraphs"
            },
            {
                "role": "user",
                "content": question
            }
        ]
    })

    return response.choices[0].message.content
}

module.exports = chat