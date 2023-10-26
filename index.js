import { createRequire } from 'module';
// Define a custom 'require' function
const require = createRequire(import.meta.url);
require('dotenv').config();
const OpenAI = require('openai').OpenAI;
const openai = new OpenAI()

const getResponse = async (text) => {
    const response = await openai.chat.completions.create({
        model: "gpt-4",
        prompt: text,
        max_tokens: 100,
        temperature: 0,
    });

    console.log(response.data)
}

getResponse("Hello")