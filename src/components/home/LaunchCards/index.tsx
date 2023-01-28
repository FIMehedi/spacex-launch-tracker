import React from 'react';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import Spinner from '../../shared/Spiner';
import LaunchCard from '../LaunchCard';

function LaunchCards() {
  const { isLoading, isError, data } = useGetLaunchesQuery(null);
  const { isActive, findItems } = useSelector(
    (state: any) => state.launchers.searchAndFilter,
  );

  if (isError) return <p className="text-[#ccc] text-center">Something went wrong!</p>;

  if (isLoading) return <Spinner />;

  const launchers = isActive ? findItems : data;
  const responsiveGridSpace = {
    xs: 8, sm: 16, md: 24, lg: 28,
  };

  return (
    <div>
      <Row
        className="justify-center"
        gutter={[responsiveGridSpace, responsiveGridSpace]}
      >
        {launchers.length ? (
          launchers.map((item: any) => (<LaunchCard key={item.flight} item={item} />
          ))
        ) : (
          <p className="text-[#ccc]">No Data Found!</p>
        )}
      </Row>
    </div>
  );
}

export default LaunchCards;
