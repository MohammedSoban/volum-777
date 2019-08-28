import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rooReducer from "./reducers/index";
import rootEpic from "./epics/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rooReducer,
  composeEnhancers(
      applyMiddleware(epicMiddleware)
      )
);

epicMiddleware.run(rootEpic);
export default store;
