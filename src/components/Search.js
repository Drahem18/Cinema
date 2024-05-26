import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./search.css";

function Search({ hide }) {
  return (
    <div className={`search hide-element ${hide && "hide-some"}`}>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        size="lg"
        style={{ color: "#ffffff" }}
      />
      <input type="text" placeholder="Search for movie" />
    </div>
  );
}

export default Search;
