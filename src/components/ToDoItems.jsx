import ToDoItem from "./ToDoItem";
import style from "./ToDoItems.module.css";

const ToDoItems = ({ todoItems, OnDelete }) => {
  return (
    <div className={style.itemsContainer}>
      {todoItems.map((item, index) => (
        <ToDoItem
          toDoDate={item.date}
          toDoName={item.name}
          toDotime={item.time}
          key={index}
          OnDelete={OnDelete}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
