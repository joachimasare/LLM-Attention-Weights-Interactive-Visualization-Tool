import React, { useState } from 'react';
import './App.css';
import QueryModel from './QueryModel';
import WordHeatmap from './WordHeatmap';

function App() {
  // Define a state to hold the word frequencies
  const [wordFrequencies, setWordFrequencies] = useState({});

  // Function to update the word frequencies state
  const updateWordFrequencies = (text) => {
    const words = text.split(/\W+/);
    const frequencies = {};

    words.forEach(word => {
      word = word.toLowerCase();
      if (!frequencies[word]) {
        frequencies[word] = 0;
      }
      frequencies[word]++;
    });

    setWordFrequencies(frequencies);
  };

  // Log the word frequencies
    // Correct placement of console.log
  console.log("Word Frequencies:", wordFrequencies);

  return (
        <div className="App">
            <header className="App-header">
                <h1>LLM Visualization Tool</h1>
                
                {/* Pass the updateWordFrequencies function as a prop to QueryModel */}
                <QueryModel onModelResponse={updateWordFrequencies} />
                
                {/* Pass the wordFrequencies state as a prop to WordHeatmap */}
                <WordHeatmap frequencies={wordFrequencies} />
            </header>
        </div>
  );
}

export default App;
