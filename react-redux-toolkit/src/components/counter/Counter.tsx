import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+</button>

      <button onClick={() => dispatch(decrement())}>-</button>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}
