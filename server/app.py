from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from langchain_community.tools.tavily_search import TavilySearchResults
from models import sendChat

# Load environment variables from .env file
load_dotenv()

# Create flask app
app = Flask(__name__)

# Allow cors for react
CORS(app)


@app.route('/chat', methods=['POST'])
def chat():
    # Ensure the content type is JSON
    if not request.is_json:
        return jsonify({"error": "Invalid content type. Expected application/json."}), 400

    try:
        # Parse the JSON payload
        data = request.get_json()

        # Check if 'messages' is in the payload and is a list
        if 'messages' not in data or not isinstance(data['messages'], list):
            return jsonify({"error": "Invalid payload. 'messages' must be a JSON array."}), 400

        messages = data['messages']

        return sendChat(messages), 200

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)