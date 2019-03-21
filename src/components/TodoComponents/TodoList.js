// your components will all go in this `component` directory.
import React from "react";
import Todo from "./Todo";

// Now contained in App file
// const todoArr = [
//   {
//     task: "Organize Garage",
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: "Bake Cookies",
//     id: 1528817084358,
//     completed: false
//   }
// ];

// class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // todos: todoArr,
//       todos: this.props.appProp
//     };
//   }
//   // componentDidMount() {
//   //   this.setState({
//   //     todos: this.props.appProp
//   //   });
//   // }

//   render() {
//     // console.log(this.state.todos);
//     console.log("todolist", this.props.appProp);
//     console.log("todoliststate", this.state.todos);
//     return (
//       <div className="todoList">
//         {this.state.todos.map(todo => {
//           return <Todo key={todo.id} todoProp={todo} />;
//         })}
//       </div>
//     );
//   }
// }

const TodoList = props => {
  return (
    <div className="todoList">
      {props.todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo} />;
      })}
    </div>
  );
};

export default TodoList;
