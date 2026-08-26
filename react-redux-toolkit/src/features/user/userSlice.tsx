import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import User from "../../components/user/User";
import { create } from "zustand";
import { act, use } from "react";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone?: string;
  website?: string;
}
export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk<
  User[],
  void,
  { rejectValue: string }
>("user/fetchUsers", async (_, thunkAPI) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      return thunkAPI.rejectWithValue("Failed to fetch users");
    }

    const data: User[] = await response.json();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

export const createUser = createAsyncThunk<
  User,
  Omit<User, "id">,
  { rejectValue: string }
>(
  "user/createUser",

  async (user, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );

      if (!response.ok) {
        return thunkAPI.rejectWithValue("Failed");
      }

      return await response.json();
    } catch {
      return thunkAPI.rejectWithValue("Server Error");
    }
  },
);

export const deleteUSer = createAsyncThunk<
  number,
  number,
  { rejectValue: string | null }
>("user/deleteUser", async (id, thunkAPI) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { method: "DELETE" },
    );

    if (!response.ok) return thunkAPI.rejectWithValue("Delete Failed");

    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue("Server Error");
  }
});

export const updateUser = createAsyncThunk<User, User, { rejectValue: string }>(
  "user/updateUser",
  async (user, thunkAPI) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        },
      );
      if (!response.ok) thunkAPI.rejectWithValue("Error While Update.");
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue("Server Error.");
    }
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUsers(state) {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? action.error.message ?? "Unknown Error";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUSer.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const userIndex = state.users.findIndex(
          (user) => user.id === action.payload.id,
        );

        if (userIndex !== -1) {
          state.users[userIndex] = action.payload;
        }
      });
  },
});

export const { clearUsers } = userSlice.actions;
export const userInitialState = initialState;
export default userSlice.reducer;
