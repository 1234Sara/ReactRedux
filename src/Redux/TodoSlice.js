import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, Description: "todo1", completed: false },
    { id: 2, Description: "todo2", completed: false },
    { id: 3, Description: "todo3", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const userInput = action.payload.Description;
      const isDuplicate = state.find((todo) => todo.Description === userInput);

      if (isDuplicate) {
        alert("Task Already Exist");
      } else {
        const newTodo = {
          id: Date.now(),
          Description: action.payload.Description,
          completed: false,
        };
        console.log(newTodo);
        state.push(newTodo);
      }
    },

    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      const { id, Description } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.Description = Description;
    },
    deleteAllTodos: (state) => {
      state.length = 0;
    },
    selectAll: (state, action) => {
      const All = action.payload.completed;
      state.forEach((todo) => {
        todo.completed = All;
      });
    },
  },
});

export const {
  addTodo,
  toggleComplete,
  deleteTodo,
  editTodo,
  deleteAllTodos,
  selectAll,
} = todoSlice.actions;
export default todoSlice.reducer;
