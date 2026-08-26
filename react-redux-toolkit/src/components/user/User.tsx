import { useEffect } from "react";
import {
  clearUsers,
  createUser,
  deleteUSer,
  fetchUsers,
  updateUser,
} from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchSingleUser } from "../../features/user/SingleUserSlice";

const User = () => {
  const { users, loading, error } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let serial = 1;

  if (loading)
    return (
      <>
        <h4>Loading User List</h4>
      </>
    );

  if (error)
    return (
      <>
        <h4>{`Error : ${error}`} </h4>
      </>
    );

  if (!users.length)
    return (
      <>
        <h4>No Record Found</h4>
      </>
    );
  return (
    <>
      <h2>User List</h2>
      <div>
        <button className="btn" onClick={() => dispatch(clearUsers())}>
          Clear List
        </button>
        <button
          className="btn"
          onClick={() =>
            dispatch(
              createUser({
                name: "Prakash",
                username: "prakash123",
                email: "prakash@gmail.com",
              }),
            )
          }
        >
          Add User
        </button>
      </div>
      <table border={1}>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{serial++}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user?.email}</td>
              <td>{user?.phone}</td>
              <td>{user?.website}</td>
              <td>
                <button
                  className="btn"
                  onClick={() => dispatch(fetchSingleUser(user.id))}
                >
                  View
                </button>

                <button
                  className="btn"
                  onClick={() => dispatch(deleteUSer(user.id))}
                >
                  Delete
                </button>

                <button
                  className="btn"
                  onClick={() =>
                    dispatch(
                      updateUser({
                        name: "Prakash",
                        username: "prakash123",
                        email: "prakash@gmail.com",
                        id: user.id,
                      }),
                    )
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
