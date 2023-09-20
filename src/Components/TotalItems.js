import React from "react";
import "./AddTodo.css";
import { useSelector } from "react-redux";

const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );
  const incompletedTodos = useSelector((state) =>
    state.todos.filter((todo) => !todo.completed === true)
  );

  return (
    <h4 className="AddTodo">
      Completed Tasks: {completedTodos.length}
      <br />
      <br />
      <h4>InCompleted Tasks: {incompletedTodos.length}</h4>
    </h4>
  );
};

export default TotalItems;
