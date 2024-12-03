import { useRef } from 'react';
import './App.css';
import Input from './Input';

function App() {
  const inputRef = useRef(null)
  return (
    <div className="App">
      <Input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
    </div>
  );
}
export default App;