import React, { useEffect } from "react";
import Cards from "./cards/cards";
import "./home.css";
import NavBar from "./NavBar/NavBar";
import Botons from "../botones/Botons";
import { useDispatch } from "react-redux";
import { getDogs, getTemp, getDogName, getDog } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemp());
    dispatch(getDogName());
    dispatch(getDog());
  }, [dispatch]);

  return (
    <div className="container_Home">
      <div className="container_navbar">
        <NavBar />
      </div>
      <div className="container_forms">
        <Botons />
      </div>
      <div className="cartas_container">
        <Cards />
      </div>
    </div>
  );
};

export default Home;
