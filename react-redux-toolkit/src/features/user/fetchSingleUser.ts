import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { User } from "./userSlice";

interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchSingleUser = createAsyncThunk<
  User,
  number,
  { rejectValue: string }
>("user/fetchSingleUser", async (id, thunkAPI) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );

    if (!response.ok) {
      return thunkAPI.rejectWithValue("User not found");
    }

    return await response.json();
  } catch {
    return thunkAPI.rejectWithValue("Server Error");
  }
});

const userDetail = createSlice({
  name: "viewUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchSingleUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchSingleUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      .addCase(fetchSingleUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong";
      });
  },
});

export default userDetail.reducer;
