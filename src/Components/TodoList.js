import React from "react";
import TodoItem from "./TodoItem";
import "./AddTodo.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilterTodo from "./FilterTodo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incompleted") {
      return !todo.completed;
    } else {
      return true;
    }
  });

  return (
    <div className="AddTodo">
      <FilterTodo handleFilterChange={handleFilterChange} />
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          Description={todo.Description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
