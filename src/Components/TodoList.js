import React from "react";
import TodoItem from "./TodoItem";
import "./AddTodo.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  //   const todos = [
  //     { id: 1, Description: "todo1", completed: false },
  //     { id: 2, Description: "todo2", completed: false },
  //     { id: 3, Description: "todo3", completed: true },
  //     { id: 4, Description: "todo4", completed: false },
  //     { id: 5, Description: "todo5", completed: false },
  //   ];

  return (
    <div className="AddTodo">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          Description={todo.Description}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};

export default TodoList;
