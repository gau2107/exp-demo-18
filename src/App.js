import { useEffect, useLayoutEffect, useRef } from 'react';
import './App.css';

function App() {
  const boxRef = useRef();

  useLayoutEffect(() => {
    console.log("useLayoutEffect"); // calls first
    boxRef.current.style.backgroundColor = "blue"; // Immediate change before showing
  });

  useEffect(() => {
    console.log("useEffect");
    boxRef.current.style.backgroundColor = "red"; // After showing
  });
  return (
    <div className="App">
      return <div ref={boxRef} style={{ width: 100, height: 100, backgroundColor: "green" }} />
    </div>
  );
}
export default App;