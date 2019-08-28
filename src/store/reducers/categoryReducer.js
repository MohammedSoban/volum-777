import {
  CREATE_CATEG0RY,
  CREATE_CATEG0RY_SUCCESS,
  CREATE_CATEG0RY_FAILURE,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE
} from "../constants";

const initialState = {
  createdCategory: null,
  createCategoryError: null,
  createCategoryLoader: false,

  categories: null,
  getCategoriesError: null,
  getCategoriesLoader: false
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CATEG0RY:
      return {
        ...state,
        createdCategory: null,
        createCategoryLoader: true,
        createCategoryError: null
      };
    case CREATE_CATEG0RY_SUCCESS:
      return {
        ...state,
        createdCategory: action.payload,
        createCategoryLoader: false,
        createCategoryError: null
      };
    case CREATE_CATEG0RY_FAILURE:
      return {
        ...state,
        createdCategory: null,
        createCategoryLoader: false,
        createCategoryError: action.payload
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: null,
        getCategoriesLoader: true,
        getCategoriesError: null
      };
    case GET_CATEGORIES_SUCCESS:
      debugger;
      return {
        ...state,
        categories: action.payload,
        getCategoriesLoader: false,
        getCategoriesError: null
      };
    case GET_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: null,
        getCategoriesLoader: false,
        getCategoriesError: action.payload
      };
    default:
      return state;
  }
}
