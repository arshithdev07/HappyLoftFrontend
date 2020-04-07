import React, {Component} from 'react';
import './common.css';

class LabelInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            label: this.props.label
        }
    }

    setValue = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    render(){
        return(
            <div className="input-label-container">
                <label htmlFor={this.props.identifier}>{this.props.label}</label>
                <input name={this.props.identifier} autoComplete='off' type={this.props.type} value={this.state.inputValue} onChange={this.setValue}/>
                <div className="bar"></div>
            </div>
        )
    }
}

export default LabelInput;