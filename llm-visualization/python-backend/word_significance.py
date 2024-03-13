from flask import Flask, request, jsonify
from flask_cors import CORS
import spacy

app = Flask(__name__)
CORS(app)

# Load the medium English model with word vectors
nlp = spacy.load('en_core_web_md')

@app.route('/word-significance', methods=['GET','POST'])
def compute_significance():
    if request.method == 'POST':
        text = request.json['text']
        doc = nlp(text)
        
        # Calculate the average vector for the entire sentence
        avg_vector = sum([word.vector for word in doc]) / len(doc)
        
        # Compute the similarity of each word to the average vector
        word_significance = {word.text: word.similarity(avg_vector) for word in doc}
        
        return jsonify(word_significance)
    else:
        return "This endpoint expects a POST request with a JSON body containing 'text'."


if __name__ == '__main__':
    app.run(port=5000)
