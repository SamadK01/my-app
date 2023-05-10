
import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState } from 'react';
import { AddTodo } from "./MyComponents/AddTodo";

function App() {

const onDelete = (todo) => {
console.log("I am Delete Function",todo)

setTodos(todos.filter((e)=> {
  return e!==todo;
}))
// let index =todos.indexOf(todo);
// todos.splice(index , 1)
}


const [todos, setTodos] = useState( [
  {
    sno: 1,
    title: "Go to the market",
    desc: "You need go to market to get job done"
  },
  {
    sno: 2,
    title: "Go to the Mall",
    desc: "You need go to market to get job done2"
  },
  {
    sno: 3,
    title: "Go to the park",
    desc: "You need go to park to get job done3"
  }

]);



  return (
    <>
<Header title="To Do List" searchBar={true} />
<AddTodo />
<Todos  todos={todos} onDelete={onDelete} />
<Footer />



</>
  );
}

export default App;
