import React from "react";
import "./Filter.css";

const FilterTodo = ({ handleFilterChange }) => {
  return (
    <div className="Filter">
      <label htmlFor="filter">Filter:</label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incompleted">Incompleted</option>
      </select>
    </div>
  );
};
export default FilterTodo;
