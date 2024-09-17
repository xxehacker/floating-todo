import { createSlice, nanoid } from "@reduxjs/toolkit";

const storedTodos = localStorage.getItem("todos") == null ? [] : JSON.parse(localStorage.getItem("todos"));
console.log(storedTodos);

const initialState = {
  todos: storedTodos,
};

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       taskName: "Learn Redux",
//       taskDes: "Its very important to learn redux to create complex projects",
//       bgColor: "red",
//     },
//   ],
// };

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        taskName: action.payload.taskname,
        taskDes: action.payload.taskdes,
        bgColor: action.payload.bgcolor,
      };
      state.todos.push(todo);
      console.log(state.todos);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
      console.log(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    // editTodo: (state, action) => {
    //   state.todos = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         taskName: action.payload.taskname,
    //         taskDes: action.payload.taskdes,
    //         bgColor: action.payload.bgcolor,
    //       };
    //     }
    //     return todo;
    //   });
    // },
  },
});

export const { addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;
