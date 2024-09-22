import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ _id: "1", taskName: "Create Todo app", status: 2, description: "Complete this app.", targetTime: "23:00" }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { taskName, description, status, targetTime } = action.payload;
      const todo = {
        _id: nanoid(),
        taskName,
        status,
        description,
        targetTime
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo["_id"] !== action.payload);
    },
    getTodo: (state, action) => {

    },
    markAsComplete: (state, action) => {
      const index = state.todos.findIndex(todo => todo["_id"] == action.payload);
      state.todos[index].status = 1;
    },
    markAsWorking: (state, action) => {
      const index = state.todos.findIndex(todo => todo["_id"] == action.payload);
      state.todos[index].status = 2;
    }
  }
});

export const { addTodo, removeTodo, getTodo, markAsComplete, markAsWorking } = todoSlice.actions;

export default todoSlice.reducer;