import React from "react";
import "./filter-by.scss";

type FilterProps = {
  onFilterValueSelected: (filterValue: string) => void;
};

const FilterBy = (props: FilterProps) => {
  const handleFilterValueChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    props.onFilterValueSelected(event.target.value);
  };

  return (
    <div className="filter-container">
      <select
        className="filter-container__list"
        id="filter-container__list"
        onChange={handleFilterValueChange}
      >
        <option value="All">All</option>
        <option value="Complete">Complete</option>
        <option value="Incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterBy;
