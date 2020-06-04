import React, { useState } from "react";
import "./App.css";
import data from "./data/data";

function App() {
  const sortedNames = data.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  const [currentNames, setCurrentNames] = useState([...sortedNames]);

  function classPicker(nameObj) {
    if (nameObj.sex === "m") {
      return "male";
    } else if (nameObj.sex === "f") {
      return "female";
    }
    return "";
  }

  const boyNames = sortedNames.filter((name) => name.sex === "m");
  const girlNames = sortedNames.filter((name) => name.sex === "f");

  const handleForm = (e) => {
    const selectedButton = e.target.value;

    if (selectedButton === "Boy Names") {
      setCurrentNames(boyNames);
    } else if (selectedButton === "Girl Names") {
      setCurrentNames(girlNames);
    } else {
      setCurrentNames(sortedNames);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    let searchingRange = sortedNames;

    // if (currentNames === [...maleNames]) {
    //   console.log("males");
    //   searchingRange = maleNames;
    // } else if (currentNames === femaleNames) {
    //   searchingRange = femaleNames;
    // } else {
    //   searchingRange = sortedNames;
    // }
    // console.log(searchingRange);

    let searchedNames = searchingRange.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCurrentNames(searchedNames);
  };

  // console.log(
  //   sortedNames === currentNames,
  //   "displaying female?",
  //   [...femaleNames] === [...currentNames]
  // );

  return (
    <div className="App">
      <input
        className="search-input"
        placeholder="search names"
        // value={searchTerm}
        onChange={handleSearch}
      ></input>
      <form onChange={handleForm}>
        <div className="radio male-names">
          <label>
            <input name="gender-selector" type="radio" value="Boy Names" />
            Boy Names{" "}
          </label>
        </div>
        <div className="radio female-names">
          <label>
            <input name="gender-selector" type="radio" value="Girl Names" />
            Girl Names{" "}
          </label>
        </div>
        <div className="radio all-names">
          <label>
            <input name="gender-selector" type="radio" value="All Names" />
            All Names
          </label>
        </div>
      </form>

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
