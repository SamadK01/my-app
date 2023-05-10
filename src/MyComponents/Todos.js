import React from "react";
import TodoItem from "../MyComponents/TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className=" my-3"> Todos List </h3>

      {props.todos.length === 0
        ? "No Data to display"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={props.onDelete} />;
          })}
    </div>
  );
};

export default Todos;
