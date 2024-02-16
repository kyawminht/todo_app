import React, { createContext, useState } from 'react'

export const myContext=createContext()
export const ToDoContent = ({children}) => {
  const [tasks, setTask] = useState([
    { id: 1, task: "Buy groceries", isDone: false },
    { id: 2, task: "Read a book", isDone: true },
    { id: 3, task: "Complete coding assignment", isDone: false },
  ]);

  const addTask=(newTask)=>{
    setTask([...tasks,newTask]);
  }

  const deleteTask=(id)=>{
    setTask(tasks.filter((el)=>el.id != id));
  }

  const doneTask=(id)=>{
    setTask(tasks.map((el)=>el.id === id ? {...el,isDone : !el.isDone} : el));
  }
  return (
    <myContext.Provider value={{addTask,deleteTask,doneTask,tasks}}>
      {children}
    </myContext.Provider>
  )
}

export default ToDoContent
