import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import studentReducer from "../features/student/studentSlice";
import userReducer from "../features/user/userSlice";
import userDetailReducer from "../features/user/SingleUserSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    student: studentReducer,
    user: userReducer,
    viewUser: userDetailReducer,
  },
});

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;
