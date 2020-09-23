import React from "react";
import { connect } from "react-redux"
import Textfield from "../Textfield/Textfield";
import Todowrapper from "../Todowrapper/Todowrapper";
import { postTodo } from "../../actions"
import { changeInputValue } from "../../actions"
import "./Box.css";

class Box extends React.Component {

    onButtonClick = () => {
        this.props.postTodo({todo : this.props.inputValue})
        this.props.changeInputValue("")
    }

  render() {
    return (
      <div className="box">
        <Todowrapper />
        <Textfield />
        <button className="btn" onClick={() => {this.onButtonClick()}}>+</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        inputValue : state.inputValue
    }
}

export default connect(mapStateToProps, { postTodo, changeInputValue })(Box);
