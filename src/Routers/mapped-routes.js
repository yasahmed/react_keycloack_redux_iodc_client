import React from 'react';
import { Route } from 'react-router-dom';
import routes from './routes-config';

const GenerateRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact ? route.exact : false}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

const LbkRouter = () => routes.map((route, i) => <GenerateRoutes key={i} {...route} />);

export default LbkRouter;
