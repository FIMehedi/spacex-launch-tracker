import React from 'react';
import { Row } from 'antd';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import Spinner from '../../shared/Spiner';
import LaunchCard from '../LaunchCard';
import { useAppSelector } from '../../../app/hooks';

function LaunchCards() {
  const { isLoading, isError } = useGetLaunchesQuery();
  const { findItems } = useAppSelector(
    (state) => state.launchers.searchAndFilter,
  );

  if (isError) return <p className="text-[#ccc] text-center">Something went wrong!</p>;

  if (isLoading) return <Spinner />;

  const responsiveGridSpace = {
    xs: 8, sm: 16, md: 24, lg: 28,
  };

  return (
    <div>
      <Row
        className="justify-center"
        gutter={[responsiveGridSpace, responsiveGridSpace]}
      >
        {findItems.length ? (
          findItems.map((item: any) => (<LaunchCard key={item.flight} item={item} />
          ))
        ) : (
          <p className="text-[#ccc]">No Data Found!</p>
        )}
      </Row>
    </div>
  );
}

export default LaunchCards;
