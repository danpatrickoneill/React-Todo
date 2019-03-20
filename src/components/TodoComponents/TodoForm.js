import React from "react";

const TodoForm = props => {
  return (
    <form className="todoForm">
      {/* Should really just need the first; id will have Date.now() and completed will be false by default */}
      <input
        type="text"
        value={props.task}
        name="task"
        placeholder="Task"
        // onChange goes here
      />
      {/* <input
        type="text"
        value={props.id}
        name="id"
        placeholder="Task"
        // onChange goes here
      />
      <input
        type="text"
        value={props.task}
        name="completed"
        placeholder="Completed?"
        // onChange goes here
      /> */}
      <button onClick={console.log("Add todo")}>Add Todo</button>
      <button onClick={console.log("Clear completed")}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
