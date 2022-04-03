
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import anomaly_detection as ad
from flask import Flask

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def index():
    return {
        "key" : "test"
    }

ticker = 'TSLA'
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