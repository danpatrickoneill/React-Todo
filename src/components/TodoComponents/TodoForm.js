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
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  submitTodo = event => {
    event.preventDefault();
    if (!this.state.task) {
      alert("Please enter a todo");
    }
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form className="todoForm" onSubmit={() => (this.value = "")}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          placeholder="Task"
          // onChange goes here
          onChange={this.handleChanges}
        />
        <button onClick={this.submitTodo}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
