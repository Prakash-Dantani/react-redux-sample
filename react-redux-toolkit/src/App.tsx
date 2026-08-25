import "./App.css";
import Counter from "./components/counter/Counter";
import CounterWithType from "./components/counter/CounterWithType";
import Student from "./components/student/Student";
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
    </>
  );
}

export default App;
