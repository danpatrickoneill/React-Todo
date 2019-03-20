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
        onChange={props.handleChanges}
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
      <button onClick={props.addTodo}>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;
