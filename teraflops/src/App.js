import InputForm from './inputForm';
import LineChart from './Components/LineChart';
import {useState, useEffect} from 'react';
import React from 'react';

function App() {
    const [state, setState] = useState({});

    useEffect(() => {
        fetch("/api").then(response => {
            if(response.status == 200){
                return response.json()
            }
        }).then(data => console.log(data))
        .then(error => console.log(error))
    });

    function gotStock(stock){
        console.log(stock)
    }
    
    return (
        <div className="App">
            <InputForm/>
        </div>
    );
}


export default App;

