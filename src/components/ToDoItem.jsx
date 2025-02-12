function ToDoItem({ toDoName, toDoDate, toDotime, OnDelete }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{toDoName}</div>
        <div className="col-3">{toDoDate}</div>
        <div className="col-3">{toDotime}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => OnDelete(toDoName)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
