import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";


const TodoApp = () => {
  return (
    <div>
      <div className="header">
        <h2>TODO Application</h2>
      </div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TodoApp;
