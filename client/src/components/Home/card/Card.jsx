import React from "react";
import "./card.css";

const Card = ({ url, name, temperament }) => {
  return (
    <div>
      <div className="carta">
        {url ? <img src={url} alt={name} /> : null}
        <p>
          {" "}
          <b>name:</b> {name}.
        </p>
        <div className="temperamentos">
          <p>
            {" "}
            <b>temperament:</b> {temperament}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
