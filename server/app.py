from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
from langchain_community.tools.tavily_search import TavilySearchResults

# Load environment variables from .env file
load_dotenv()

# Create flask app
app = Flask(__name__)

# Allow cors for react
CORS(app)


# app routes for the backend
@app.route('     ', methods=['GET'])
def home():
    return "hello world"

@app.route('/agent/', methods=['POST'])
def agent():
    search = TavilySearchResults(max_results=2)
    #search_results = search.invoke("what is the weather in SF")
    search_results = search.invoke("What is a mortgage?")
    print(search_results)
    # If we want, we can create other tools.
    # Once we have all the tools we want, we can put them in a list that we will reference later.
    tools = [search]
    return search_results

if __name__ == '__main__':
    app.run(debug=True)