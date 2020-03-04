import { compose, createStore } from "redux";

import rootReducer from "./reducers/root.reducer";

const isDev = process.env.NODE_ENV !== "production";

const composeEnhancers =
  (isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
