from app import app
from flask import request, jsonify, Response
import uuid
import requests
import json
from .utils import create_quarters as _create_quarters

# Connecting to Microservice A - PDF Generator by Becky Wong
@app.route('/generate_pdf', methods=['POST'])
def generate_pdf():
    url = 'http://127.0.0.1:5001/generate_pdf'
    payload = request.get_json()

    response = requests.post(url, json=payload)
    data = response.json()
    return jsonify(data)

# Connecting to Microservice B - Create Quarters
@app.route('/create-quarters', methods=['POST'])
def create_quarters():
    url = 'http://127.0.0.1:5002/create_quarters'
    payload = request.get_json()

    response = requests.post(url, json=payload)

    return Response(
        json.dumps(response.json()),
        status=response.status_code,
        mimetype="application/json"
    )

# Connecting to Microservice C - Check Degree Requirements
@app.route('/validate-degree-plan', methods=['POST'])
def validate_degree_plan():
    url = 'http://127.0.0.1:5003/validate_degree_plan'
    payload = request.get_json()

    response = requests.post(url, json=payload)

    return jsonify(response.json())

# Connecting to Microservice D - Import/export plans

