import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ContextChild() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <><button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Change Theme via child</button>
      <p>current theme in child is {theme}</p>
    </>
  )
}