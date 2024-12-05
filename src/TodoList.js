// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

import { useMemo } from "react";
import { filterTodos } from "./utils";

export default function TodoList({ todos, theme, tab }) {
  // using normal it will get called when theme is changed
  // const visibleTodos = filterTodos(todos, tab);

  // using useMemo
  const visibleTodos = useMemo(() => {
    return filterTodos(todos, tab);
  }, [todos, tab])


  return (
    <div style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
      <p><b>Note: <code>filterTodos</code> is artificially slowed down!</b></p>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
    </div>
  )
}