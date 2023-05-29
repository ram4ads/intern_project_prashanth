import { useState } from "react";
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
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h1>search bar</h1>
      <p>Please enter atleast 3 letters</p>
      <input
        type="search"
        name="searchBar"
        onChange={handleSearch}
        value={searchInput}
      />
      <ul>
        {searchInput.length >= 3 &&
          permutations
            .filter((each) => each.includes(searchInput))
            .map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
