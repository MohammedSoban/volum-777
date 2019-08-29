import { CREATE_CATEG0RY, GET_CATEGORIES } from "../constants";
import { db } from "../../firebase";
import { Observable } from "rxjs/Rx";
import { categoryAction } from "../actions/categoryAction";

export default class categoryEpic {
  static createCategory = action$ =>
    action$.ofType(CREATE_CATEG0RY).switchMap(({ payload }) => {
      return Observable.fromPromise(
        db
          .collection("categories")
          .doc()
          .set(payload)
      )
        .switchMap(() => {
          return Observable.of(
            categoryAction.createCategorySuccess(payload),
            categoryAction.getCategories()
            )
        })
        .catch(err => {
          return categoryAction.getCategoriesFailure(
            `Error in getting Categroies! ${err}`
          );
        });
    });

  static getCategories = action$ =>
    action$.ofType(GET_CATEGORIES).mergeMap(({payload}) => {
      return db
        .collection("categories")
        // .where("pId", "==", payload ? payload.pId: "None")
        .get()
        .then(querySnapshot => {
          let categories = [];
          querySnapshot.forEach(doc => {
            console.log(doc.id, " => ", doc.data());
            categories.push({ ...doc.data(), id: doc.id});
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
