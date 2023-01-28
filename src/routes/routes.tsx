import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import DetailsPage from '../pages/DetailsPage';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

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
        path: '/details/:flightNo',
        element: <DetailsPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
