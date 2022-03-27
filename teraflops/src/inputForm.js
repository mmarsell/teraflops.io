import React from 'react';
import ReactDOM from 'react-dom';
class InputForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
    

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        
        if (this.state.value == ''){
            alert('input cannot be empty')
        }
        else {
            alert('ticker submitted: ' + this.state.value);
        }
        event.preventDefault();
    }

    render() {
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
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Ticker:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <button aria-label="submit"> submit </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
);
    }
}

export default InputForm;