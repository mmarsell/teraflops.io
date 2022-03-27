import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from './inputForm';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "98.css"

var element = React.createElement('h1', {className: 'greeting'}, 'Hello, world!');

ReactDOM.render(<InputForm />, document.getElementById('root'));
// reportWebVitals();


