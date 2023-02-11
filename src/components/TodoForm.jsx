import { useEffect, useRef, useState } from "react";

const TodoForm = ({ submitTodoHandler, edit, setEdit, onUpdate }) => {
  const [input, setInput] = useState(edit.id ? edit.text : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    setInput(edit.text);
  }, [edit.text]);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Enter Todo!");
      return;
    }
    if (edit.id) {
      onUpdate(edit.id, input);
    } else {
      submitTodoHandler(input);
    }

    setInput("");
    setEdit({ id: null, text: "" });
  };

  return (
    <form className="formControl" onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeHandler}
        value={input}
        placeholder={edit.id ? "update todo..." : "add todo..."}
        ref={inputRef}
      />
      <button className={`button ${edit.id ? "update" : "add"}`} type="submit">
        {edit.id ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
