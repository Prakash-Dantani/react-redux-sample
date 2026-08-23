import "./App.css";
import Counter from "./components/counter/Counter";
import CounterWithType from "./components/counter/CounterWithType";
import Student from "./components/student/student";

function App() {
  return (
    <>
      <Counter />
      <CounterWithType />
      <br />
      <Student />
    </>
  );
}

export default App;
