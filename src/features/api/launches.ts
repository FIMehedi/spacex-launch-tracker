import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const launchesApi = createApi({
	reducerPath: 'launchesApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.spacexdata.com/v3',
	}),
	endpoints: (builder) => ({
		getLaunches: builder.query({
			query: () => '/launches',
		}),
		getLaunchByFlightNo: builder.query({
			query: (flightNo) => '/launches/' + flightNo,
		}),
	}),
});

export const { useGetLaunchesQuery, useGetLaunchByFlightNoQuery } = launchesApi;
