import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
}

interface StudentState {
  students: Student[];
}

interface UpdateStudentPayload {
  id: number;
  student: Student;
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<Student>) => {
      state.students.push(action.payload);
    },

    updateStudent: (state, action: PayloadAction<UpdateStudentPayload>) => {
      const { id, student } = action.payload;
      student.id = id;
      const index = state.students.findIndex((student) => student.id === id);
      if (index >= 0) {
        state.students[index] = student;
      }
    },

    deleteStudent: (state, action: PayloadAction<number>) => {
      state.students = state.students.filter(
        (student) => student.id !== action.payload,
      );
    },

    viewStudent: (state, action: PayloadAction<number>) => {
      state.students.find((student) => student.id == action.payload);
    },
  },
});

export const { addStudent, updateStudent, deleteStudent, viewStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
