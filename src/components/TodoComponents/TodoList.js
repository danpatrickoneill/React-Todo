// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";

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
  }
];

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: todoArr
    };
  }

  render() {
    console.log(this.state.todoList);
    return (
      <div className="TodoList">
        {this.state.todoList.map(todo => {
          return <Todo todoProp={todo} />;
        })}
      </div>
    );
  }
}

export default TodoList;
