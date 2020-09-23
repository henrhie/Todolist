import React from "react";
import { connect } from "react-redux";
import { changeInputValue } from "../../actions";
import "./Textfield.css"

class Textfield extends React.Component {

    onValueChange = (event) => {
        this.props.changeInputValue(event.target.value);
    }

    render() {
        return (
            <input 
            type="text" 
            onChange={(event) => {this.onValueChange(event)}}
            value={this.props.inputValue}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
} 

export default connect(mapStateToProps, { changeInputValue })(Textfield);