import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddToDo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");
  const [todotime, setTodoTime] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };

  const handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };

  const handleTodoTime = (event) => {
    setTodoTime(event.target.value);
  };

  const handleaddBtn = () => {
    if (!todoName.trim() || !todoDate.trim() || !todotime.trim()) return;
    onNewItem(todoName, todoDate, todotime);
    setTodoName("");
    setTodoDate("");
    setTodoTime("");
  };
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleTodoName}
          />
        </div>
        <div className="col-3">
          <input type="date" onChange={handleTodoDate} value={todoDate} />
        </div>
        <div className="col-3">
          <input type="time" onChange={handleTodoTime} value={todotime} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleaddBtn}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
