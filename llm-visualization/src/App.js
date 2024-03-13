import React, { useState } from 'react';
import './App.css';
import QueryModel from './QueryModel';
import WordHeatmap from './WordHeatmap';

function App() {
  // Define a state to hold the word frequencies
  const [wordSignificance, setwordSignificance] = useState({});

  // Function to update the word frequencies state
  const updateWordSignificance = (frequencies) => {
    setwordSignificance(frequencies);
  };

  // Log the word frequencies
  console.log("Word Frequencies:", wordSignificance);

  return (
    <div className="App">
      <header className="App-header">
        <h1>LLM Visualization Tool</h1>
                
        {/* Pass the updateWordSignificance function as a prop to QueryModel */}
        <QueryModel onModelResponse={updateWordSignificance} />
                
        {/* Conditionally render the WordHeatmap component */}
        {Object.keys(wordSignificance).length > 0 && <WordHeatmap wordSignificance={wordSignificance} />}
      </header>
    </div>
  );
}

export default App;
