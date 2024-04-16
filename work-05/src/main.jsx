import ReactDOM from 'react-dom/client'

import Form from './Form'
import "./style.css"
import Form2 from './Form2'
import VideoPlayer from './VideoPlayer'
import TodoApp from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    <Form />

    <Form2 />

    <VideoPlayer />

    <TodoApp />

  </>,
)
