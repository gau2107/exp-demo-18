import { useState } from 'react';
import './App.css';
import ImpureComponent from './components/ImpureCounter';
import PureComponent from './components/PureCounter';

function App() {
  const [counter, setCounter] = useState(0);
  const [mulCounter, setMulCounter] = useState(0);


  return (
    <div className="App">
      <button onClick={() => setMulCounter(counter * 2)}> Multiple Counter: {mulCounter}</button>
      <button onClick={() => setCounter(counter + 1)}> Increment Counter</button>
      {/* Normal component */}
      <ImpureComponent counter={counter}/> 
      {/* Pure / Memoized component only rerenders when relevant state is updated */}
      <PureComponent counter={counter}/>
    </div>
  );
}

export default App;