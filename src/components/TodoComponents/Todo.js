import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    return (
      // Added toString() here due to console error; removing now
      <p className="todo" completed={this.props.todoProp.completed}>
        {this.props.todoProp.task}
      </p>
    );
  }
}

// function Todo(props) {
//   return (
//     <p id={props.todoProp.id} completed={props.todoProp.completed}>
//       {props.todoProp.task || "TODO"}
//     </p>
//   );
// }

export default Todo;
