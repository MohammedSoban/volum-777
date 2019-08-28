import {
  CREATE_CATEG0RY,
  CREATE_CATEG0RY_SUCCESS,
  CREATE_CATEG0RY_FAILURE,
  GET_CATEGORIES,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE
} from "../constants";

export class categoryAction {
  //create category

  static createCategory(category) {
    return {
      type: CREATE_CATEG0RY,
      payload: category
    };
  }

  static createCategorySuccess(category) {
    return {
      type: CREATE_CATEG0RY_SUCCESS,
      payload: category
    };
  }

  static createCategoryFailure(error) {
    return {
      type: CREATE_CATEG0RY_FAILURE,
      payload: error
    };
  }

  // get all Category

  static getCategories() {
    return {
      type: GET_CATEGORIES,
      payload: null
    };
  }

  static getCategoriesSuccess(categories) {

    return {
      type: GET_CATEGORIES_SUCCESS,
      payload: categories
    };
  }

  static ggetCategoriesFailure(error) {
    return {
      type: GET_CATEGORIES_FAILURE,
      error: error
    };
  }
}
