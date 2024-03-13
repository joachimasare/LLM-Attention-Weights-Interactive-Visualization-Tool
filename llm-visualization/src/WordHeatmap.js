import React from 'react';
import './WordHeatmap.css';

function WordHeatmap({ wordSignificance }) {  // Change here
    // Extract words and their significance scores
    const words = Object.keys(wordSignificance);  // Change here
    const maxSemanticScore = Math.max(...Object.values(wordSignificance));  // Change here

    // Function to determine color intensity based on semantic score
    const getColorIntensity = (word) => {
        const intensity = (wordSignificance[word] / maxSemanticScore) * 255;  // Change here
        return `rgb(${255 - intensity}, ${255 - intensity}, 255)`;
    };

    return (
        <div className="heatmap-container">
            {words.map((word) => (
                <span 
                    key={word} 
                    style={{ backgroundColor: getColorIntensity(word) }}
                    className="heatmap-word"
                >
                    {word}
                </span>
            ))}

            {/* Legend to explain heatmap colors */}
            <div className="heatmap-legend">
                <span style={{ backgroundColor: 'rgb(255, 255, 255)' }}>Least Important</span>
                <span style={{ backgroundColor: 'rgb(0, 0, 255)' }}>Most Important</span>
            </div>
        </div>
    );
}

export default WordHeatmap;
