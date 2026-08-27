import { useGetTodoQuery } from "../../service/todoService";

const Todo = () => {
  const { data, isLoading, error } = useGetTodoQuery();

  if (isLoading) return <h4>Loading Todo List</h4>;

  if (error) return <h4>Server Error</h4>;
  let serial = 1;

  return (
    <>
      <h3>Todo List</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr. No</th>
            {/* <th>Name</th> */}
            <th>Todo Task</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((rec) => (
            <tr key={rec.id}>
              <td>{serial++}</td>
              {/* <td>{user.name}</td> */}
              <td>{rec.title}</td>
              <td>{rec.completed ? "YES" : "NO"}</td>
              <td>
                {/* <button
                  className="btn"
                  onClick={() => dispatch(fetchSingleUser(user.id))}
                >
                  View
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todo;
