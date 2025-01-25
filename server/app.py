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
    print("Here")
    if not request.is_json:
        return jsonify({"error": "Invalid content type. Expected application/json."}), 400
    print("Here2")
    try:
        # Parse the JSON payload
        data = request.get_json()
        print("Here3")
        print(data)

        # Check if 'messages' is in the payload and is a list
        if 'message' not in data:
            return jsonify({"error": "Invalid payload. 'message' must be a string"}), 400
        
        if 'thread_id' not in data:
            return jsonify({"error": "Invalid payload. 'thread_id' must be a string"}), 400

        message = data['message']
        thread_id = data['thread_id']
        print("Here4")
        # Return newest message
        return sendChat(message, thread_id), 200

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500



if __name__ == '__main__':
    app.run(debug=True)