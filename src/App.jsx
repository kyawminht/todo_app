import { useState } from "react";
import "./App.css";
import CreateForm from "./todo/CreateForm";
import Heading from "./todo/Heading";
import List from "./todo/List";
import ListGroup from "./todo/ListGroup";

function App() {
  
  return (
    <>
      <div className=" container mx-auto w-[300px]">
        <Heading />
        <CreateForm />
        <ListGroup />
        <List  />
      </div>
    </>
  );
}

export default App;
