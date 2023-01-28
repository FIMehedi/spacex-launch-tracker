import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';

export default function AppBar(): JSX.Element {
  return (
    <div className="fixed left-[calc(50%-10rem)] sm:left-[calc(50%-12rem)] z-10">
      <div className="bg-[rgba(50,50,50,0.6)] mx-auto sm:w-96 w-80 py-2 px-4 rounded-b-2xl flex justify-between items-center">
        <Link to="/">
          <i className="bx bx-rocket text-4xl text-emerald-500 cursor-pointer" />
        </Link>
        <Search />
        <div>{}</div>
      </div>
    </div>
  );
}
