import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchByFlightNoQuery } from '../features/api/launches';

function DetailsPage() {

  const { flightNo } = useParams()
  
  const {isLoading, isError, data} = useGetLaunchByFlightNoQuery(flightNo)
  
  return (
    <div className="container">
      This is Details page
    </div>
  );
}

export default DetailsPage;
