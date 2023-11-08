import React, { useState } from "react";
import "./search-bar.scss";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <div className="search-bar-form">
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
    </div>
  );
};

export default SearchBar;
