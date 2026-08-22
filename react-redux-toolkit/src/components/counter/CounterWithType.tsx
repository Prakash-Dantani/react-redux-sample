// import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

const CounterWithType = () => {
  //  // Without state data type
  //  // const count = useSelector((state: any) => state.counter.value);
  //  // const dispatch = useDispatch();

  const count = useAppSelector((state) => state.counter.value);

  const dispatch = useAppDispatch();
  return (
    <>
      <hr />
      <h1>With Data value </h1>
      <h1>{count}</h1>
      <div>
        <button className="btn" onClick={() => dispatch(increment())}>
          +
        </button>

        <button className="btn" onClick={() => dispatch(decrement())}>
          -
        </button>

        <button className="btn" onClick={() => dispatch(incrementByAmount(10))}>
          Add Value
        </button>

        <button className="btn" onClick={() => dispatch(decrementByAmount(5))}>
          Minus Value
        </button>

        <button className="btn" onClick={() => dispatch(reset())}>
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterWithType;
