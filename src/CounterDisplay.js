import { useSelector } from "react-redux"

export default function CounterDisplay() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>
        Counter Display{" "}
        <span className="component-type">(I am the child 1)</span>{" "}
      </h2>
      <p>
        <b>Counter value: {count}</b>
      </p>
    </div>
  )
}