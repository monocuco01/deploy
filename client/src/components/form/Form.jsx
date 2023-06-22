import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { createDog, validateName } from "../../redux/actions";

const Form = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    height: "",
    weight: "",
    lifeSpan: "",
    temper: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      dispatch(validateName(value));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event) => {
    const selectedOption = Number(event.target.value);
    setFormData((prevData) => ({
      ...prevData,
      temper: [...prevData.temper, selectedOption],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createDog(formData));

    setFormData({
      name: "",
      image: "",
      height: "",
      weight: "",
      lifeSpan: "",
      temper: [],
    });
  };

  const tempers = useSelector((state) => state.temper);

  const selectedTemperaments = formData.temper.map((tempId) => {
    const temp = tempers.find((temp) => temp.id === tempId);
    return temp ? temp.name : "";
  });

  const nameValid = useSelector((state) => state.nameValid);
  const isNameEmpty = formData.name.trim().length === 0;
  return (
    <>
      <div className="overlay"></div>
      <div className={`form-popup ${isClosing ? "closing" : ""}`}>
        <form className="form" onSubmit={handleSubmit}>
          <div className="boton_cerrar_prueba">
            {!isNameEmpty && !nameValid && (
              <div className="outside-error-message">
                <p>Name should only contain letters</p>
              </div>
            )}
            <button
              type="button"
              className="form-close-button"
              onClick={handleClose}
            >
              X
            </button>
          </div>

          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            placeholder="Snoopy."
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="image" className="form-label">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="form-input"
            required
            placeholder="Picture URL"
            value={formData.image}
            onChange={handleChange}
          />

          <label htmlFor="height" className="form-label">
            Height:
          </label>
          <input
            type="text"
            id="height"
            name="height"
            className="form-input"
            required
            placeholder="30-420 cm"
            value={formData.height}
            onChange={handleChange}
          />

          <label htmlFor="weight" className="form-label">
            Weight:
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            className="form-input"
            required
            placeholder="18-253 kg"
            value={formData.weight}
            onChange={handleChange}
          />

          <label htmlFor="lifeSpan" className="form-label">
            Lifespan:
          </label>
          <input
            type="text"
            id="lifeSpan"
            name="lifeSpan"
            className="form-input"
            required
            placeholder="0-25 years"
            value={formData.lifeSpan}
            onChange={handleChange}
          />

          <label htmlFor="temper" className="form-label">
            Temperaments:
          </label>
          <select
            className="form-select"
            name="temper"
            value=""
            onChange={handleSelectChange}
          >
            <option value="">Select an option</option>
            {tempers.map((temp) => (
              <option key={temp.id} value={temp.id}>
                {temp.name}
              </option>
            ))}
          </select>

          <div className="selected-temper">
            <label className="form-label">Selected Temperaments:</label>{" "}
            {selectedTemperaments.map((temperamentis) => (
              <p>{temperamentis}</p>
            ))}
          </div>

          <div className="pruebasutmit">
            <button type="submit" className="form-button">
              Create New Breed
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
