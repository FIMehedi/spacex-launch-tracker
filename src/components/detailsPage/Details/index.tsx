import React from 'react';
import { Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useGetLaunchByFlightNoQuery } from '../../../features/api/launches';
import Spinner from '../../shared/Spiner';

function Details():JSX.Element {
  const { flightNo } = useParams();

  const { isLoading, isError, data } = useGetLaunchByFlightNoQuery(flightNo);

  if (isError) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bg-[rgba(50,50,50,0.6)] mx-auto mt-2 p-2 px-4 max-w-[600px]">
      <img
        className="mx-auto w-80"
        src={data.links.mission_patch_small}
        alt=""
      />
      <h1 className="text-emerald-500 font-semibold text-2xl flex justify-center items-center py-2 ">
        {data.mission_name}
        {data.launch_success && <i className="bx bxs-check-circle pl-2" />}
      </h1>
      <div>
        <p className="text-center text-emerald-600">{data.details}</p>
        <ul className="text-[#ccc] mt-2">
          <li>
            Rocket:
            {data.rocket.rocket_name}
          </li>
          <li>
            Rocket Type:
            {data.rocket.rocket_type}
          </li>
          <li>
            Launch Year:
            {data.launch_year}
          </li>
          <li>
            Launch Site:
            {data.launch_site.site_name}
          </li>
          <li>
            Launch Status:
            {data.launch_success ? 'Success' : 'Failure'}
          </li>
          {!data.launch_success && (
          <li>
            Failure Reason:
            {data.launch_failure_details?.reason || 'Not Specified' }
          </li>
          )}
        </ul>
        <div className="text-center my-2">
          <Link to="/" className="mr-2">
            <Button ghost>Go Back</Button>
          </Link>
          <a href={data.links.wikipedia} target="_blank" rel="noreferrer">
            <Button ghost>More Info</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
