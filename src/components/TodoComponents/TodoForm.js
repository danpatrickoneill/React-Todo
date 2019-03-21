import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      task: ""
    };
  }

  handleChanges = event => {
    console.log("event: ", event.target.value);
    console.log([event.target.name]);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  submitTodo = event => {
    event.preventDefault();
    if (!this.state.task) {
      alert("Please enter a todo");
    } else {
      this.props.addTodo(this.state.task);
      this.setState({ task: "" });
    }
  };

  submitClear = event => {
    event.preventDefault();
    this.props.clearCompleted();
  };

  render() {
    return (
      <form className="todoForm" onSubmit={() => (this.value = "")}>
        <input
          className="todoInput"
          type="text"
          value={this.state.task}
          name="task"
          placeholder="Task"
          // onChange goes here
          onChange={this.handleChanges}
        />
        <button className="addButton" onClick={this.submitTodo}>
          Add Todo
        </button>
        <button className="clearButton" onClick={this.submitClear}>
          Clear Completed
        </button>
      </form>
    );
  }
}

export default TodoForm;
