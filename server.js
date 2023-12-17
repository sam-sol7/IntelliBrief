const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const OpenAI = require('openai-api');
// import OpenAI from 'openai';

// const config = new Configuration({
// })

const openai = new OpenAI('API_KEY');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/chat', async (req,res) => {
    console.log("app.post");
    const { prompt } = req.body;
    console.log(prompt);
    const completion = await openai.complete({
        // model: 'text-davinci-003',
        // max_tokens: 512,
        // temperature: 0,

        engine: 'gpt-3.5-turbo-instruct',
        prompt: `Make a summary of: ${prompt} by first listing its main points in a list(separated by 30 spaces) then giving a full summary paragraph`,
        maxTokens: 512,
        temperature: 0,
        // topP: 1,
        // presencePenalty: 0,
        // frequencyPenalty: 0,
        // bestOf: 1,
        // n: 1,
        // stream: false,
        // stop: ['\n', "testing"]
    }); 

    res.send(completion.data.choices[0].text);
    console.log(completion.data);
    console.log(completion.data.choices[0].text);
});

const PORT = 8020;

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`)
});