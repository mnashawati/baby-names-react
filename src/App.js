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

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedNames = sortedNames.filter((obj) =>
      obj.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCurrentNames(searchedNames);
  };

  const handleForm = (e) => {
    const selectedButton = e.target.value;

    const maleNames = sortedNames.filter((name) => name.sex === "m");
    const femaleNames = sortedNames.filter((name) => name.sex === "f");

    if (selectedButton === "Male Names") {
      setCurrentNames(maleNames);
    } else if (selectedButton === "Female Names") {
      setCurrentNames(femaleNames);
    } else {
      setCurrentNames([...sortedNames]);
    }
  };

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
            <input name="gender-selector" type="radio" value="Male Names" />
            Male Names{" "}
          </label>
        </div>
        <div className="radio female-names">
          <label>
            <input
              // onChange={handleForm}
              name="gender-selector"
              type="radio"
              value="Female Names"
            />
            Female Names{" "}
          </label>
        </div>
        <div className="radio all-names">
          <label>
            <input
              // onChange={handleForm}
              name="gender-selector"
              type="radio"
              value="All Names"
            />
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
