import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDogDetail, resetDetail } from "../../redux/actions";
import "./detail.css";

export default function Detail() {
  const { dogDetail } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  const formatTemp = () => {
    let temps = "";
    for (let i = 0; i < dogDetail.tempers.length; i++) {
      temps += dogDetail.tempers[i].name;
      if (i === dogDetail.tempers.length - 1) break;
      temps += ", ";
    }
    return temps;
  };

  useEffect(() => {
    console.log("ID en Detail:", id); // Agrega este console.log
    dispatch(getDogDetail(id));
    return () => {
      dispatch(resetDetail());
    };
  }, []);

  const checkId = () => typeof id !== "number";

  return (
    <div className="detail-container">
      <div className="detail-content">
        <div className="detail-image">
          {checkId() && dogDetail?.image ? (
            <img src={dogDetail?.image} alt="" />
          ) : (
            <img
              src={`https://cdn2.thedogapi.com/images/${dogDetail?.idImage}.jpg`}
              alt=""
              className="detail_image"
            />
          )}
        </div>
        <div className="detail-info">
          <h3 className="detail-name">Name: {dogDetail?.name}</h3>
          <p>Height: {dogDetail?.height} cm</p>
          <p>Weight: {dogDetail?.weight} kg</p>
          <p>Tempers: {dogDetail?.temper}</p>
          <p>LifeSpan: {dogDetail?.life_span}</p>
        </div>
        <Link to="/home">
          <button>back</button>
        </Link>
      </div>
    </div>
  );
}
