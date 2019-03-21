import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoArr = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  },
  {
    task: "Darn Socks",
    id: 1528817077986,
    completed: false
  },
  {
    task: "Take Out Trash",
    id: 1528817094358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoArr,
      task: "",
      id: "",
      completed: false
    };
  }

  handleChanges = event => {
    console.log("event: ", event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addTodo = event => {
    event.preventDefault();
    const newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: this.state.completed
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    console.log("app", this.state.todos);
    return (
      <div className="app">
        <h2>Welcome to To-Doozle!</h2>
        <TodoList appProp={this.state.todos} />
        <TodoForm
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
