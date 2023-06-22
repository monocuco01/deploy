import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="container_page">
      <div className="container_enter">
        <h2>Welcome</h2>
        <p>to</p>
        <h3>dogs SPA</h3>
        <Link to="/home">
          <button>Enter</button>
        </Link>
        <h4>by Hector </h4>
      </div>
    </div>
  );
};

export default Landing;
