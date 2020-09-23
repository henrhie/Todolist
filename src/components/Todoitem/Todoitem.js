import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../actions";
import "./Todoitem.css";

class Todoitem extends React.Component {
    constructor(props) {
        super(props);
        this.checkBoxRef = React.createRef();
    }
  

  onCheckboxClick = () => {
    setTimeout(() => {
        if (this.checkBoxRef.current.checked) {
            this.props.deleteTodo(this.props.id);
        }
    }, 1000)
  };
  render() {
    return (
      <div className="todoitem">
        <input type="checkbox" ref={this.checkBoxRef} onClick={() => { this.onCheckboxClick()} }/>
        <p>{this.props.todoText}</p>
      </div>
    );
  }
}

export default connect(null, { deleteTodo })(Todoitem);
