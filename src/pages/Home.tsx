import React from 'react';
import Filter from '../components/home/Filter';
import LaunchCards from '../components/home/LaunchCards';

export default function Home(): JSX.Element {
  return (
    <div>
      <Filter />
      <LaunchCards />
    </div>
  );
}
