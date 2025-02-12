import Appname from "./components/Appname";
import AddToDo from "./components/AddToDo";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import Welcome from "./components/Welcome.jsx";

function App() {
  const [newTask, NextTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDate, itemTime) => {
    NextTodoItem((currVal) => [
      ...currVal,
      { name: itemName, date: itemDate, time: itemTime },
    ]);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoitem = newTask.filter((items) => items.name !== itemName);
    NextTodoItem(newTodoitem);
  };
  return (
    <center className="todo-container">
      <Appname />
      <AddToDo onNewItem={handleNewItem} />
      <ToDoItems todoItems={newTask} OnDelete={handleDeleteItem} />
      {newTask.length === 0 && <Welcome />}
    </center>
  );
}

export default App;
