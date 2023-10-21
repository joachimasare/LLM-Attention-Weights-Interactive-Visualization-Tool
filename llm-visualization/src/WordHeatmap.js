import React from 'react';
import './WordHeatmap.css'; // for styling (you can create this file later)

function WordHeatmap({ frequencies }) {
    // Extract words and their frequencies
    const words = Object.keys(frequencies);
    const maxFrequency = Math.max(...Object.values(frequencies));

    // Function to determine color intensity based on word frequency
    const getColorIntensity = (frequency) => {
        const intensity = (frequency / maxFrequency) * 255;
        return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
    };

    return (
        <div className="heatmap-container">
            {words.map((word) => (
                <span 
                    key={word} 
                    style={{ backgroundColor: getColorIntensity(frequencies[word]) }}
                    className="heatmap-word"
                >
                    {word}
                </span>
            ))}
        </div>
    );
}

export default WordHeatmap;
