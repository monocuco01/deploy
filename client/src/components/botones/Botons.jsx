import React, { useState } from "react";
import "./botons.css";
import Form from "../form/Form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  filterDogsByTemperament,
  filterDogsByOrigin,
  sortDogs,
} from "../../redux/actions";

const Botons = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };
  const tempers = useSelector((state) => state.temper);

  const dispatch = useDispatch();

  const handleTemperamentChange = (event) => {
    const selectedTemperament = event.target.value;
    console.log(event.target.value);
    dispatch(filterDogsByTemperament(selectedTemperament));
  };
  const handleOriginChange = (event) => {
    const selectedOrigin = event.target.value;
    dispatch(filterDogsByOrigin(selectedOrigin));
  };

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    dispatch(sortDogs(selectedOrder));
  };

  return (
    <div className="container_botones">
      <div className="filter_temp">
        <label className="filter-label">Filter by temperaments:</label>
        {tempers && tempers.length > 0 && (
          <select className="filter-select" onChange={handleTemperamentChange}>
            <option value="">All</option>
            {tempers.map((temp) => (
              <option key={temp.name} value={temp.name}>
                {temp.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="filter_where">
        <label className="filter-label">Filter by origin:</label>
        <select className="filter-select" onChange={handleOriginChange}>
          <option value="">All</option>
          <option value="api">api</option>
          <option value="db">db</option>
        </select>
      </div>

      <div className="filter_order">
        <label className="filter-label">Sort by:</label>
        <select className="filter-select" onChange={handleSortChange}>
          <option value="">Sort</option>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      <div className="create">
        <button className="boton_create" onClick={openForm}>
          Create Dog
        </button>
        {isFormOpen && (
          <div className="form-popup">
            <div className="form-content">
              <Form onClose={closeForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Botons;
