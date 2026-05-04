from flask import Flask, request, jsonify
from service import generate_greeting
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
# ROUTE + CONTROLLER
@app.route('/greet', methods=['POST'])
def greet():
    data = request.get_json()        # get data from frontend
    name = data.get('name')          # extract name
    
    message = generate_greeting(name)  # call service
    
    return jsonify({"message": message})
 
if __name__ == '__main__':
    app.run(debug=True)