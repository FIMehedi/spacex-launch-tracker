import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/routes';

export default function App(): JSX.Element {
  return (
    <RouterProvider router={routes} />
  );
}
