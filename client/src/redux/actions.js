import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const GET_TEMPER = "GER_TEMPER";
export const GET_DOG_NAME = "GET_DOG_NAME";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const RESET_DETAIL = "RESET_DETAIL";
export const GET_IMAGE = "GET_IMAGE";
export const SORT_DOGS_ASCENDING = "SORT_DOGS_ASCENDING";
export const SORT_DOGS_DESCENDING = "SORT_DOGS_DESCENDING";

export const getDogs = () => {
  return async function (dispatch) {
    const response = await axios.get("/dogs");
    const dogs = response.data;

    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDog = () => {
  return async (dispatch) => {
    const response = await axios.get(`/dogs`);
    const dog = response.data;
    dispatch({ type: GET_IMAGE, payload: dog });
  };
};

export const getTemp = () => {
  return async (dispatch) => {
    const response = await axios.get("/tempers");
    const temper = response.data;
    console.log(temper);
    dispatch({ type: GET_TEMPER, payload: temper });
  };
};

export const getDogName = (name) => {
  return async (dispatch) => {
    const response = await axios.get(`/dogs?name=${name}`);
    const temper = response.data;
    dispatch({ type: GET_DOG_NAME, payload: temper });
  };
};
export const setCurrentPage = (page) => ({
  type: "SET_CURRENT_PAGE",
  payload: page,
});

export const setItemsPerPage = (perPage) => ({
  type: "SET_ITEMS_PER_PAGE",
  payload: perPage,
});
export const resetDetail = () => {
  return {
    type: RESET_DETAIL,
  };
};
export const getDogDetail = (id) => {
  return async (dispatch) => {
    const response = await axios(`/dogs/${id}`);
    return dispatch({
      type: GET_DOG_DETAIL,
      payload: response.data,
    });
  };
};
export const filterDogsByTemperament = (temperament) => {
  return (dispatch, getState) => {
    const { filteredDogs } = getState(); // Obtener los perros filtrados del estado
    const filteredDogsByTemperament = filteredDogs.filter(
      (dog) => dog.temper && dog.temper.includes(temperament)
    );
    console.log(filteredDogsByTemperament); // Agrega este console.log para mostrar los perros filtrados por temperamento
    dispatch({
      type: "FILTER_DOGS_BY_TEMPERAMENT",
      payload: filteredDogsByTemperament,
    });
  };
};
export const filterDogsByOrigin = (origin) => {
  return (dispatch, getState) => {
    const { filteredDogs } = getState();

    let filteredDogsByOrigin = filteredDogs;

    if (origin) {
      filteredDogsByOrigin = filteredDogs.filter(
        (dog) => dog.origin === origin
      );
    }

    dispatch({
      type: "FILTER_DOGS_BY_ORIGIN",
      payload: filteredDogsByOrigin,
    });
  };
};
export const sortDogs = (order) => {
  return (dispatch, getState) => {
    const { filteredDogs } = getState();
    let sortedDogs = [...filteredDogs];

    if (order === "asc") {
      sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "desc") {
      sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
    }

    dispatch({
      type: "SORT_DOGS",
      payload: sortedDogs,
    });
  };
};

export const createDog = (dogData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/dogs", dogData);
      const createdDog = response.data;
      dispatch({ type: "CREATE_DOG", payload: createdDog });
    } catch (error) {
      console.log("Error creating dog:", error);
    }
  };
};
export const validateName = (name) => {
  const onlyLettersRegex = /^[a-zA-Z\s]*$/;
  const isValid = onlyLettersRegex.test(name);
  return { type: "VALIDATE_NAME", payload: isValid };
};
