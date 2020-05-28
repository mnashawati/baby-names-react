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

  // function handelSearch(e) {
  //   const searchTerm = e.target.value;
  // }

  const filterAndUpdateCurrentNames = (nameObjects) => {
    let searchResult = nameObjects.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return searchResult;
  };

  // function checkGender(array) {
  //   if  array.filter((element) => element.sex === "m");
  // }

  return (
    <div className="App">
      <input
        className="search-input"
        placeholder="search names"
        value={searchTerm}
        onChange={(e) => {
          console.log(e.target.value);
          setCurrentNames(() => filterAndUpdateCurrentNames(sortedNames));
          setSearchTerm(e.target.value);

          // debugger;
          // filterAndUpdateCurrentNames(sortedNames);
        }}
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
