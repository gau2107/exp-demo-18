import { useDispatch } from "react-redux"
import { decrement, increment } from "./store/counterSlice";

export default function CounterControls() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Counter Controls
        <span className="component-type">(I am the child 2)</span>
        <button onClick={() => dispatch(increment(1))}>Inc by 1</button>
        <button onClick={() => dispatch(decrement(1))} >Dec by 1</button>
      </h2>
    </div>
  )
}