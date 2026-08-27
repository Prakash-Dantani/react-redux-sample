import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const todoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getTodo: builder.query<Todo[], void>({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodoQuery } = todoAPI;
