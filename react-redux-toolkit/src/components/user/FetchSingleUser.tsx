import { useAppSelector } from "../../hooks/reduxHooks";

const FetchSingleUser = () => {
  const { user, loading } = useAppSelector((state) => state.viewUser);
  console.log(user);
  console.log(loading);
  if (!user && loading === false)
    return (
      <>
        <h4>No User Selected</h4>
      </>
    );
  if (loading) {
    return "<h4>Loading Record...</h4>";
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID </th>
            <th>Name </th>
            <th>User Name </th>
            <th>Email </th>
            {/* <th>Address </th> */}
            <th>Phone </th>
            <th>Website </th>
            {/* <th>Company </th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user?.id}</td>

            <td>{user?.name}</td>

            <td>{user?.username}</td>

            <td>{user?.email}</td>

            {/* 
            <td>{user?.name}</td>
         */}

            <td>{user?.phone}</td>

            <td>{user?.website}</td>

            {/* 
            <td>{user?.company}</td>
         */}
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default FetchSingleUser;
