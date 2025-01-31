from flask import Flask, request, jsonify
import math

app = Flask(__name__)

@app.route('sci.html', methods=['GET'])
def calculate():
    expr = request.args.get('expr')
    try:
        # Évaluer l'expression mathématique en toute sécurité
        result = eval(expr, {"__builtins__": None}, {"sin": math.sin, "cos": math.cos, "tan": math.tan,
                                                      "log": math.log10, "sqrt": math.sqrt, "pow": math.pow,
                                                      "exp": math.exp, "pi": math.pi, "e": math
