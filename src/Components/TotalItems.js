import React from "react";
import "./AddTodo.css";
import { useSelector } from "react-redux";

const TotalItems = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todo) => todo.completed === true)
  );

  return <h4 className="AddTodo">Done Tasks: {completedTodos.length}</h4>;
};

export default TotalItems;
