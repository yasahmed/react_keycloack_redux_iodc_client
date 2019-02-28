import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import "@assets/css/style.css";
import userManager from "@services/Auth";
import appConfig from "@services/Auth/auth-config";
import MainRouter from "@routers";
import { OidcProvider,loadUser } from "redux-oidc";
import configureStore from "@store/index";

const renderApp = store => {
  const ConnectedApp = () => (
    <Provider store={store}>
      <OidcProvider store={store} userManager={userManager}>
        <MainRouter />
      </OidcProvider>
    </Provider>
  );
  const AppWithHot = hot(module)(ConnectedApp);
  ReactDOM.render(<ConnectedApp />, document.getElementById("app"));
};

const run = () => {
  const store_ = configureStore({ userManager, initialState: { appConfig } });
  loadUser(store_, userManager).then(() => renderApp(store_));
};

run();
