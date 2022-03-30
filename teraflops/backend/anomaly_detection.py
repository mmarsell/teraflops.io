import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest

class AnomalyDetector:
    def __init__(self, df):
        print('Initializing Anomaly Detection.')
        if type(df) != type(pd.DataFrame()):
            raise Exception('Input is expected to be a dataframe')
        try:
            df.index = pd.to_datetime(df.index)
        except:
            raise Exception('Expected index to be a readable date format.')

        self.stock_data = df

    def Detect(self):
        isol_forest = IsolationForest(contamination='auto', max_samples='auto', n_estimators=100)
        data_copy = self.stock_data.copy()
        data_copy['isAnomaly'] = isol_forest.fit_predict(data_copy)
