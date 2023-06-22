import React, { useEffect, useState } from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/actions";
import dogilogo from "../../../img/undraw_good_doggy_re_eet7 (1).svg";

const Cards = () => {
  const dogs = useSelector((state) => state.dogs);
  const imageState = useSelector((state) => state.Image);
  const currentPage = useSelector((state) => state.currentPage);
  const itemsPerPage = useSelector((state) => state.itemsPerPage);
  const dispatch = useDispatch();

  const totalDogs = dogs.length;
  const totalPages = Math.ceil(totalDogs / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const dogsPage = Array.isArray(dogs) ? dogs.slice(start, end) : [];

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const getImageById = (id) => {
    const dogImage = imageState.find((image) => image.id === id);
    return dogImage ? dogImage.image : "";
  };

  return (
    <div className="container_cards">
      {isLoading ? (
        <div className="cargando">
          <p>Loading...</p>
          <img src={dogilogo} alt="" srcSet="" />
        </div>
      ) : (
        <>
          <div className="cards">
            {dogsPage.map((dog) => (
              <Link key={dog.id} to={`/detail/${dog.id}`}>
                <Card
                  name={dog.name}
                  url={dog.image || getImageById(dog.id)}
                  temperament={dog.temper}
                />
              </Link>
            ))}
          </div>
          <div className="pagination">
            {getPageNumbers().map((page) => (
              <button
                key={page}
                className={currentPage === page ? "active" : ""}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
