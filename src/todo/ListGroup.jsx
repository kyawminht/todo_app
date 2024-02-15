import React from "react";
import List from "./List";

const ListGroup = ({ tasks,deleteTask,doneTask}) => {
  return (
    <div>
      <div className="flex items-center justify-between ">
      <h4 className="text-xl mt-5">Your list</h4>
      <p>Done <span className="">{tasks.filter((el)=>el.isDone === true).length}</span>/ <span>{tasks.length}</span></p>
      </div>
      {tasks?.map(({ id, task, isDone }) => (
        <List key={id} id={id} task={task} isDone={isDone} deleteTask={deleteTask} doneTask={doneTask}/>
      ))}
    </div>
  );
};

export default ListGroup;
