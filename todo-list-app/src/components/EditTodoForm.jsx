import React, { useState } from "react";

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);

  function handleSubmit(event) {
    event.preventDefault();
  editTodo(value, task.id);
    setValue("")
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="update task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;