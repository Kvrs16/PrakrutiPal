import React, { useState } from "react";
import { debounce } from "lodash";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = debounce((event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  }, 500);

  return (
    <input
      type="text"
      placeholder="Search for a movie..."
      onChange={handleChange}
    />
  );
};

export default SearchBar;
