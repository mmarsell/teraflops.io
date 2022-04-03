
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import anomaly_detection as ad
from flask import Flask, current_app, jsonify, request

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return {
        "key" : "test"
    }
@app.route('/query', methods=['POST'], strict_slashes=False)
def choose_stock():
    stock = request.json['ticker']
    yf_stock = yf.Ticker(stock)
    history = yf_stock.history(period="max")
    history['Date'] = history.index.astype(str)
    print(history)
    return history.to_json()

if __name__ == '__main__':
    app.run()

    # stock = yf.Ticker(ticker)
    # history = stock.history(period="max")
    # detector = ad.AnomalyDetector(history)
    # output = detector.Detect()
    # print(output)

    # 1. Run anomaly detection on history
    # 2. Run sentiment analysis on ticker mentioned in news/social media
    # 3. Run macD analysis
    # 4. Find US congress members that have recently traded that stock