import React, { lazy } from 'react';

const ClientsContainer = lazy(() => import('@containers/ClientsContainer'));
const About = lazy(() => import('@pages/About'));

const routes = [
  {
    path: '/',
    component: ClientsContainer,
    exact: true,
  },
  {
    path: '/about',
    component: About,
  },
];
export default routes;
