import React from "react";

const Todo = props => {
  // console.log(this.props);
  return (
    // Added toString() here due to console error; still works great!
    <div
      className="todo"
      onClick={() => props.toggleTodo(props.todo.id)}
      completed={props.todo.completed.toString()}
      style={
        props.todo.completed === true
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

// function Todo(props) {
//   return (
//     <p id={props.todoProp.id} completed={props.todoProp.completed}>
//       {props.todoProp.task || "TODO"}
//     </p>
//   );
// }

export default Todo;
