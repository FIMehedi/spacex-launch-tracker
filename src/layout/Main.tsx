import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/shared/AppBar';

export default function Main(): JSX.Element {
  return (
    <div className="bg-main min-h-screen">
      <AppBar />
      <div className="container mx-auto px-2 md:px-10 text-white pt-16">
        <Outlet />
      </div>
    </div>
  );
}
