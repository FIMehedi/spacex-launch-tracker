import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import DetailsPage from '../pages/DetailsPage';
import Home from '../pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/details/:flightNumber',
        element: <DetailsPage />,
      },
    ],
  },
]);

export default routes;
