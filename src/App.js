import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodoForm from "./Components/ِAddTodoForm";
import TodoList from "./Components/TodoList";
import TotalItems from "./Components/TotalItems";

function App() {
  return (
    <div className="App">
      <AddTodoForm />
      <TodoList />
      <TotalItems />
    </div>
  );
}

export default App;
