import {
  addStudent,
  deleteStudent,
  updateStudent,
  viewStudent,
} from "../../features/student/studentSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const Student = () => {
  const students = useAppSelector((state) => state.student.students);

  const dispatch = useAppDispatch();

  const updateRec = {
    name: "Sejal",
    age: 26,
    course: "BA",
    id: 1,
  };

  const insertRec = {
    name: "Prakash",
    age: 31,
    course: "MCA",
    id: students.length + 1,
  };

  let serial = 1;
  return (
    <>
      <h2>Student List</h2>
      <div>
        <button className="btn" onClick={() => dispatch(addStudent(insertRec))}>
          Add Student
        </button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{serial++}</td>
              {/* <td>{student.id}</td> */}
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
              <td>
                <button
                  className="btn"
                  onClick={() =>
                    dispatch(
                      updateStudent({ id: student.id, student: updateRec }),
                    )
                  }
                >
                  Edit
                </button>

                <button
                  className="btn"
                  onClick={() => dispatch(viewStudent(student.id))}
                >
                  View
                </button>

                <button
                  className="btn"
                  onClick={() => dispatch(deleteStudent(student.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Student;
