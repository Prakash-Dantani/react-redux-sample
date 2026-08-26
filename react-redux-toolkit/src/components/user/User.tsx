import { useEffect } from "react";
import { clearUsers, fetchUsers } from "../../features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchSingleUser } from "../../features/user/fetchSingleUser";

const User = () => {
  const users = useAppSelector((state) => state.user.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  let serial = 1;
  return (
    <>
      <h2>User List</h2>
      <div>
        <button className="btn" onClick={() => dispatch(clearUsers())}>
          Clear List
        </button>
      </div>
      <table>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
