from flask import Flask
from flask_cors import CORS

# Create flask app
app = Flask(__name__)

# Allow cors for react
CORS(app)



# app routes for the backend
@app.route('/api/endpoint', methods=['GET'])
def home():
    return "hello world"


if __name__ == '__main__':
    app.run(debug=True)