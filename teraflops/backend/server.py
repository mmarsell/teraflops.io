
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

ticker = 'TSLA'
all_listed = {} # dictionary to hold all stock symbols and names
print('testing...')
if __name__ == '__main__':
    stock = yf.Ticker(ticker)
    history = stock.history(period="max")
    # 1. Run anomaly detection on history
    # 2. Run sentiment analysis on ticker mentioned in news/social media
    # 3. Run macD analysis