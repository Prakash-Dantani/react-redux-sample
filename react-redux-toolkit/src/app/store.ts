import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import studentReducer from "../features/student/studentSlice";
import userReducer from "../features/user/userSlice";
import userDetailReducer from "../features/user/SingleUserSlice";
import { todoAPI } from "../service/todoService";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
    user: userReducer,
    viewUser: userDetailReducer,
    [todoAPI.reducerPath]: todoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoAPI.middleware),
});

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;
