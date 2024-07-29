import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
