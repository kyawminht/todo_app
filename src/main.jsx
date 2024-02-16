import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ToDoContent from './context/ToDoContent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ToDoContent>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ToDoContent>,
)
