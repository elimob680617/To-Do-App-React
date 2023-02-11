const Todo = ({ todo, onComplete, onDelete, onEdit, index }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={todo.isCompleted ? "completed" : ""}>
        <p>
          {index + 1} . <b>{todo.text}</b>
        </p>
      </div>
      <div>
        <button className="button " onClick={onEdit}>
          Edit
        </button>
        <button className="button remove" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
