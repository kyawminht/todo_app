import { useState } from "react";
import "./App.css";
import CreateForm from "./todo/CreateForm";
import Heading from "./todo/Heading";
import List from "./todo/List";
import ListGroup from "./todo/ListGroup";

function App() {
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
    <>
      <div className=" container mx-auto w-[300px]">
        <Heading />
        <CreateForm addTask={addTask} />
        <ListGroup tasks={tasks} deleteTask={deleteTask} doneTask={doneTask} />
        <List  />
      </div>
    </>
  );
}

export default App;
