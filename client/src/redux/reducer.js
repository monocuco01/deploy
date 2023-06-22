const initialState = {
  dogs: [],
  temper: [],
  Image: [],
  currentPage: 1,
  itemsPerPage: 8,
  filteredDogs: [],
  filteredDogs: [],
  nameValid: false,
};

import {
  GET_DOGS,
  GET_TEMPER,
  GET_DOG_NAME,
  GET_DOG_DETAIL,
  RESET_DETAIL,
  GET_IMAGE,
} from "./actions";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, filteredDogs: action.payload };
    case GET_IMAGE:
      return { ...state, Image: action.payload };

    case GET_TEMPER:
      return { ...state, temper: action.payload };
    case GET_DOG_NAME:
      return { ...state, dogs: action.payload };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_ITEMS_PER_PAGE":
      return {
        ...state,
        itemsPerPage: action.payload,
      };
    case GET_DOG_DETAIL:
      return {
        ...state,
        dogDetail: action.payload,
      };

    case RESET_DETAIL:
      return {
        ...state,
        dogDetail: {},
      };
    case "FILTER_DOGS_BY_TEMPERAMENT":
      return { ...state, dogs: action.payload };
    case "FILTER_DOGS_BY_ORIGIN":
      return {
        ...state,
        dogs: action.payload,
      };
    case "SORT_DOGS":
      return { ...state, dogs: action.payload };
    case "CREATE_DOG":
      return { ...state, dogs: [...state.dogs, action.payload] };
    case "VALIDATE_NAME":
      return { ...state, nameValid: action.payload };

    default:
      return state;
  }
};

export default rootReducer;
