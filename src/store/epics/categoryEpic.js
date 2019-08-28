import { CREATE_CATEG0RY, GET_CATEGORIES } from "../constants";
import { db } from "../../firebase";
import { Observable } from "rxjs/Rx";
import { categoryAction } from "../actions/categoryAction";

export default class categoryEpic {
  static createCategory = action$ =>
    action$.ofType(CREATE_CATEG0RY).mergeMap(({ payload }) => {
      return Observable.fromPromise(
        db
          .collection("categories")
          .doc(`${payload.category_id}`)
          .set(payload)
      )
        .catch(error => {
          console.error("Error writing document: ", error);
          return categoryAction.createCategoryFailure(
            `Error in Creating Category! ${error}`
          );
        })
        .map(err => {
          console.log("Document successfully written!", err);
          return categoryAction.createCategorySuccess("successfully");
        })
        .switchMap(response => {
          if (response.type === "CREATE_CATEGORY_SUCCESS") {
            return Observable.of(
              categoryAction.createCategorySuccess(payload),
              categoryAction.getCategories()
            );
          } else {
            return Observable.of(
              categoryAction.createCategoryFailure(
                `Error in Creating Company! ${response.payload}`
              )
            );
          }
        });
    });

  static getCategories = action$ =>
    action$.ofType(GET_CATEGORIES).mergeMap(({ }) => {
      return db
        .collection("categories")
        .get()
        .then(querySnapshot => {
          let categories = [];
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            categories.push(doc.data());
          });
          return categoryAction.getCategoriesSuccess(categories);
        })
        .catch(err => {
          return categoryAction.getCategoriesFailure(
            `Error in getting Categroies! ${err}`
          );
        });
    });
}
