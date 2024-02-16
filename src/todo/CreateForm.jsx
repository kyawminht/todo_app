import React, { useContext, useState } from 'react'
import List from './List';
import { myContext } from '../context/ToDoContent';

const CreateForm = () => {
  const {addTask}=useContext(myContext);

    const [input,setInput]=useState('');

    const handleSubmit=()=>{
        const newTask={
            id:Date.now(),
            task:input,
            isDone:false,
        }
        addTask(newTask);
        setInput("");

    }
  
  return (
    <div className='  mt-5 flex justify-center'>
      <input value={input} type="text" className=' p-5 border border-solid border-gray-500' onChange={(event)=>setInput(event.target.value)} />
      <button onClick={handleSubmit} className=' bg-black text-white p-5'>Add</button>
    
    </div>
  )
}

export default CreateForm
