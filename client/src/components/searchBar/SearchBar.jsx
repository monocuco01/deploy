import React, { useState } from "react";
import "./searchBar.css";
import { useDispatch } from "react-redux";
import { getDogName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getDogName(searchTerm));
  };

  return (
    <div className="container_searchbar">
      <input
        type="text"
        placeholder="Search by name"
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button className="search-button" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
