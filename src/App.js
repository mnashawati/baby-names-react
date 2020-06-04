import React, { useState } from "react";
import "./App.css";
import data from "./data/data";

function App() {
  const sortedNames = data.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [currentNames, setCurrentNames] = useState([...sortedNames]);

  function classPicker(nameObj) {
    if (nameObj.sex === "m") {
      return "male";
    } else if (nameObj.sex === "f") {
      return "female";
    }
    return "";
  }

  const filterAndUpdateCurrentNames = (searchingFor, nameObjects) => {
    console.log("filter and look for searchingFor: ", `=>${searchingFor}<=`);

    const searchResult = nameObjects.filter((obj) =>
      obj.name.toLowerCase().includes(searchingFor.toLowerCase())
    );
    return searchResult;
  };

  const handleSearch = (e) => {
    console.log("handlesearch: ", e.target.value);
    const tempSearchTerm = e.target.value;
    setSearchTerm(tempSearchTerm);
    setCurrentNames(filterAndUpdateCurrentNames(tempSearchTerm, currentNames));
  };

  console.log("returning JSX");

  return (
    <div className="App">
      <input
        className="search-input"
        placeholder="search names"
        value={searchTerm}
        onChange={handleSearch}
      ></input>
      <div className="radio male-names">
        <label>
          <input name="gender-selector" type="radio" value="Male Names" />
          Male Names{" "}
        </label>
      </div>
      <div className="radio female-names">
        <label>
          <input name="gender-selector" type="radio" value="Female Names" />
          Female Names{" "}
        </label>
      </div>
      <div className="radio all-names">
        <label>
          <input name="gender-selector" type="radio" value="All Names" />
          All Names
        </label>
      </div>

      <div className="all-names-container">
        {currentNames.map((nameObj) => (
          <button
            key={nameObj.id}
            className={"name-container " + classPicker(nameObj)}
          >
            {" "}
            {nameObj.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
