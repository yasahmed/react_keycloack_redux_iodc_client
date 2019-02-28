import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "@reducers/index";
import createOidcMiddleware from "redux-oidc";
import promiseMiddleware from "./promiseMiddleware";
import initialClientsState from "./initial-state";

export default function configureStore({ initialState, userManager }) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    { ...(initialState || {}), ...initialClientsState },
    composeEnhancers(
      applyMiddleware(promiseMiddleware, createOidcMiddleware(userManager))
    )
  );
}
