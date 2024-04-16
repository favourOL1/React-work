import { useEffect, useMemo, useState } from 'react';
import { filterTodos } from './utils.js'

// eslint-disable-next-line react/prop-types
export default function TodoListState({ todos, theme, tab }) {
    const [visibleTodos, update] =  useState(todos)

  useEffect(() => {

    update(filterTodos(todos, tab))

  }, [tab, todos])

  return (
    <div className={theme}>
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
  );
}