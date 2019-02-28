import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import LbkRouter from "./mapped-routes";
import { CallbackComponent } from "redux-oidc";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import userManager from "@services/Auth";

const About = lazy(() => import("@pages/About"));
const ClientList = lazy(() => import("@pages/ClientList"));
const ClientsContainer = lazy(() => import('@containers/ClientsContainer'));

//Router callback
const callback = ({ props }) => (
  <CallbackComponent
    userManager={userManager}
    successCallback={() => props.history.replace("/")}
    errorCallback={() => props.history.replace("/")}
  >
    <div>Redirecting...</div>
  </CallbackComponent>
);

const callBackRoute = path_ => (
  <Route exact path={path_} render={props => callback({ props })} />
);

const MainRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {callBackRoute("/auth-callback")}
          <Route exact path="/" component={About} />
          <Route path="/other" component={ClientsContainer} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default MainRouter;
