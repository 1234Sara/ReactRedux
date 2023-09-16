import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../Redux/TodoSlice";

const TodoItem = ({ id, Description, completed }) => {
  const [editing, setEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(Description);

  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }));
  };

  // const handleDeleteAllClick = () => {
  //   dispatch(deleteAllTodos());
  // };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    dispatch(editTodo({ id: id, Description: newDescription }));
    setEditing(false);
  };

  const handleInputChange = (e) => {
    setNewDescription(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        maxWidth: "200px",
        marginBottom: "1rem",
        marginLeft: "6rem",
        marginRight: "5rem",
      }}
    >
      <Form.Check
        aria-label="option 1"
        checked={completed}
        onChange={handleCompleteClick}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      />

      {editing ? (
        <input value={newDescription} onChange={handleInputChange} />
      ) : (
        <span>{Description}</span>
      )}
      {editing ? (
        <Button
          variant="primary"
          onClick={handleSaveClick}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          Save
        </Button>
      ) : (
        <>
          <Button
            variant="info"
            onClick={handleEditClick}
            style={{ marginLeft: "5rem", marginRight: "1rem" }}
          >
            Edit
          </Button>
        </>
      )}
      <Button
        variant="danger"
        onClick={handleDeleteClick}
        style={{ marginLeft: "5rem", marginRight: "2rem" }}
      >
        Delete
      </Button>
      {/* <Button
        variant="danger"
        onClick={handleDeleteAllClick}
        style={{ marginLeft: "3rem", marginRight: "3rem" }}
      >
        DeleteAll
      </Button> */}
    </div>
  );
};

export default TodoItem;
