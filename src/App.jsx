import { useState, useEffect } from "react";
import React from "react";
import "./App.css";

const permutations = [];

const generate = (str, prefix) => {
  if (prefix.length === str.length) {
    permutations.push(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    generate(str, prefix + char);
  }
};

generate("abcde", "");

function App() {
  const [isSearchable, setIsSearchable] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput.length < 3) {
      if (isSearchable) setIsSearchable(false);
    } else {
      if (!isSearchable) setIsSearchable(true);
    }
  }, [searchInput]);

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h1>search bar</h1>
      <input
        type="search"
        name="searchBar"
        onChange={handleSearch}
        value={searchInput}
      />
      <ul>
        {isSearchable &&
          permutations
            .filter((each) => each.includes(searchInput))
            .map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
