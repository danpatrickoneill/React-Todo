import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoSearch from "./components/TodoComponents/TodoSearch";
import "./components/TodoComponents/Todo.css";

const todoArr = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Organize Desk",
    id: 1528817077287,
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
  },
  {
    task: "Wash Car",
    id: 1528817096358,
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
      todos: todoArr
    };
  }

  addTodo = item => {
    const newTodo = {
      task: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  toggleTodo = id => {
    console.log("It's togglin' time!");
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return { task: todo.task, id: todo.id, completed: !todo.completed };
        }
        return todo;
      })
    });
  };

  clearCompleted = () => {
    const newTodos = this.state.todos.filter(todo => todo.completed === false);
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  searchFilter = term => {
    console.log(term);
    const newTodos = this.state.todos.filter(todo =>
      todo.task.toLowerCase().includes(term.toLowerCase())
    );
    console.log(newTodos);
    this.setState({ todos: newTodos });
  };

  render() {
    // console.log("app", this.state.todos);
    return (
      <div className="app">
        <h2>Welcome to To-Doozle!</h2>
        <TodoSearch searchFilter={this.searchFilter} />
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        <TodoForm
          task={this.state.task}
          handleChanges={this.handleChanges}
          addTodo={this.addTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
