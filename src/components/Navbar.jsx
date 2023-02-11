import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Completed", label: "Completed" },
  { value: "Uncompleted", label: "Uncompleted" },
];

const Navbar = ({ unCompletedtodos, selectedOption, onChange }) => {
  if (!unCompletedtodos) return <h2>Set Your Today TODOS!</h2>;
  return (
    <header>
      <span>{unCompletedtodos}</span>
      <h2> todos are not completed</h2>

      <Select
        className="select"
        value={selectedOption}
        onChange={onChange}
        options={options}
      />
    </header>
  );
};

export default Navbar;
