import { useRef } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
function AddToDo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const todotimeElement = useRef();

  const handleaddBtn = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    const todotime = todotimeElement.current.value;
    if (!todoName.trim() || !todoDate.trim() || !todotime.trim()) return;

    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    todotimeElement.current.value = "";
    onNewItem(todoName, todoDate, todotime);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleaddBtn}>
        <div className="row kg-row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter Todo here"
              ref={todoNameElement}
            />
          </div>
          <div className="col-3">
            <input type="date" ref={todoDateElement} />
          </div>
          <div className="col-3">
            <input type="time" ref={todotimeElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <IoAddCircleSharp />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
