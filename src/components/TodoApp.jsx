import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState("All");

  const [edit, setEdit] = useState({ id: null, text: "", inCompleted: false });

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodo = (input) => {
    const newTodo = {
      id: Math.trunc(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    const todosCopy = [...todos];
    const selectedItem = todosCopy[index];
    selectedItem.isCompleted = !selectedItem.isCompleted;
    todosCopy[index] = selectedItem;
    setTodos(todosCopy);
  };

  const removeHandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, newValue) => {
    console.log(id);
    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    const todosCopy = [...todos];
    const selectedItem = todosCopy[index];
    selectedItem.text = newValue;
    todosCopy[index] = selectedItem;
    setTodos(todosCopy);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    console.log(e);
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="container">
      <Navbar
        unCompletedtodos={todos.filter((todo) => !todo.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandler}
      />

      <TodoForm
        submitTodoHandler={addTodo}
        onUpdate={editTodo}
        edit={edit}
        setEdit={setEdit}
      />

      <TodoList
        todos={filteredTodos}
        onComplete={completeHandler}
        onDelete={removeHandler}
        setEdit={setEdit}
        // onUpdate={editTodo}
      />
    </div>
  );
};

export default TodoApp;
