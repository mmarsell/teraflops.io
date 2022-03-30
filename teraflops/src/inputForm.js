import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';

function InputForm() {
    const validTickers = ['MSFT' , 'TSLA'];
    const [ticker, setTicker] = useState("");
    const [errorMessage, setMessage] = useState("");

    const handleSubmit =(event) => {
        event.preventDefault();
        console.log(`Ticker submitted ${ticker}`)
        setTicker("");
        let validated = handleValidation();
        if (validated){
            setMessage("")
            // call python API with ticker
        }
        else {
            console.log('ticker not valid.');
            setMessage("Non-valid identifier")
        }
    }

    function handleValidation() {
        if (validTickers.indexOf(ticker.toLocaleUpperCase()) == -1){ return false;}
        else {return true;}
    }

    return (
        <div style={{ height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:300}} className="window">
                <div className='title-bar'>
                    <div className='title-bar-text'>Input Ticker</div>
                    <div className='title-bar-controls'>
                        <button aria-label='Minimize' />
                        <button aria-label='Maximize' />
                        <button aria-label ='Close' />
                    </div>
                </div>

                <div className='window-body'>
                    <div className='field-row' style={{justifyContent:'center'}}> 
                        <form onSubmit={handleSubmit}>
                            <label>
                                Symbol/Name:
                                <input placeholder="MSFT, Tesla, etc." type="text" value={ticker} style={{marginLeft:5}} onChange={(e) => setTicker(e.target.value)} required />
                            </label>

                            <button style={{marginLeft: 20}} aria-label="submit"> submit </button>
                        </form>
                    </div>
                    <p className='error' style={{color:'red'}}>{errorMessage}</p>
                </div>
            </div>
        </div>
);
    }

export default InputForm;