import React from "react";
import Todoitem from "../Todoitem/Todoitem";
import { fetchTodos } from "../../actions";
import { connect } from "react-redux";

class Todowrapper extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  renderList = () => {
      return (this.props.todos.map((todoObject) => {
        return (
            <Todoitem todoText={todoObject.todo} key={todoObject.id} id={todoObject.id}/>
        )
      }))
  }

  render() {
    return (
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        todos : Object.values(state.todos)
    }
}

export default connect(mapStateToProps, { fetchTodos })(Todowrapper);
