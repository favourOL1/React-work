import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Increment from './components/Increment.jsx'
import TodoList from './components/TodoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Increment />

    <TodoList />
  </React.StrictMode>,
)
