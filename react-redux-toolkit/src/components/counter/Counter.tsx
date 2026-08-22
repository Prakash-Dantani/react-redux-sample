import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "../../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state: any) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>{count}</h1>

        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>

        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>

        <button className="btn" onClick={() => dispatch(incrementByAmount(10))}>
          Add Five
        </button>

        <button className="btn" onClick={() => dispatch(decrementByAmount(10))}>
          Minus Five
        </button>

        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
}
