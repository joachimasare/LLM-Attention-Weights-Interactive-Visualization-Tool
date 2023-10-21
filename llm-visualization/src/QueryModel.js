import React, { useState } from 'react';
import axios from 'axios';

const QueryModel = ({ onModelResponse }) => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');

    const handleQuery = async () => {
        try {
            const result = await axios.post('http://localhost:3001/ask', { prompt });
            setResponse(result.data.completion);
            
            // Update word frequencies in the App component
            onModelResponse(result.data.wordFrequencies);
            
        } catch (error) {
            console.error('Error querying model:', error);
        }
    };

    return (
        <div>
            <textarea value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Enter your prompt here"></textarea>
            <button onClick={handleQuery}>Ask Model</button>
            <div>
                <strong>Response:</strong>
                <p>{response}</p>
            </div>
        </div>
    );
};

export default QueryModel;
