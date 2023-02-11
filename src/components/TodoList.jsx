import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, setEdit }) => {
  // const [edit, setEdit] = useState({ id: null, text: "", inCompleted: false });

  // const editTodo = (newValue) => {
  //   onUpdate(edit.id, newValue);
  //   setEdit({ id: null, text: "" });
  // };

  if (todos.length === 0) return <p>Please Add Todo!</p>;
  return (
    <div>
      {/* {edit.id ? (
        <TodoForm submitTodoHandler={editTodo} edit={edit} />
      ) : (
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
            onEdit={() => setEdit(todo)}
          />
        ))
      )} */}
      {todos.map((todo, index) => (
        <Todo
          index={index}
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => {
            setEdit(todo);
          }}
        />
      ))}
    </div>
  );
};

export default TodoList;
