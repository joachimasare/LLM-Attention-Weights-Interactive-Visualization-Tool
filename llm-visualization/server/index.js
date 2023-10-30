const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Middleware to parse JSON requests
app.use(express.json());

app.use(cors());

app.post('/ask', async (req, res) => {
    const prompt = req.body.prompt;

    try {
        const response = await axios.post('https://api.openai.com/v1/completions', {
            model: 'text-davinci-003',  
            prompt: prompt,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer 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`
            }
        });
        const completion = response.data.choices[0].text.trim();
        const wordFrequencies = computeWordFrequency(completion);
        
        res.json({
            completion: completion,
            wordFrequencies: wordFrequencies
        });
        
    } catch (error) {
        console.error('Server error:', error);  // Log the error to the console
        if (error.response) {
            console.error('OpenAI API error:', error.response.data);
        }
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


function computeWordFrequency(text) {
    const words = text.split(/\W+/);
    const wordFrequency = {};

    words.forEach(word => {
        word = word.toLowerCase();
        if (!wordFrequency[word]) {
            wordFrequency[word] = 0;
        }
        wordFrequency[word]++;
    });

    return wordFrequency;
}
