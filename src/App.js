import { useState } from 'react';
import './App.css';
import ThemeContext from './ThemeContext';
import ContextChild from './ContextChild';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>{theme}</button>
      </div>
      <ContextChild />
    </ThemeContext.Provider>
  );
}
export default App;