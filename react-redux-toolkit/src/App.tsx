import "./App.css";
import Counter from "./components/counter/Counter";
import CounterWithType from "./components/counter/CounterWithType";
import FileUpload from "./components/file_upload/FileUpload";
import Student from "./components/student/Student";
import Todo from "./components/todo/Todo";
import FetchSingleUser from "./components/user/FetchSingleUser";
import User from "./components/user/User";

function App() {
  return (
    <>
      <Counter />
      <CounterWithType />
      <br />
      <Student />
      <br />
      <User />
      <br />
      <FetchSingleUser />
      <br />
      {/* <Todo /> */}
      <br />
      <FileUpload />
    </>
  );
}

export default App;
