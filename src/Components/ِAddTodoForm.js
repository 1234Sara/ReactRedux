import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddTodo.css";
import { useDispatch } from "react-redux";
import { addTodo, deleteAllTodos, selectAll } from "../Redux/TodoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  const resetStates = () => {
    setValue("");
  };

  const dispatch = useDispatch();

  const handleDeleteAllClick = () => {
    dispatch(deleteAllTodos());
  };
  const handleSelectAllClick = () => {
    dispatch(selectAll({ completed: true }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("user entered: " + value);
    dispatch(
      addTodo({
        Description: value,
      })
    );
    resetStates();
  };
  return (
    <div className="AddTodo">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <h2>My Todo List</h2>

          <Form.Control
            style={{ width: "30%" }}
            type="Description"
            placeholder="Add Todo List"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />
        <Button
          variant="primary"
          onClick={handleSelectAllClick}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          Select All
        </Button>
        <Button
          variant="danger"
          onClick={handleDeleteAllClick}
          style={{ marginLeft: "1rem", marginRight: "1rem" }}
        >
          Delete All
        </Button>
      </Form>
    </div>
  );
};

export default AddTodoForm;
