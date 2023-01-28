import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Launch from './types';

export const launchesApi = createApi({
  reducerPath: 'launchesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v3',
  }),
  endpoints: (builder) => ({
    getLaunches: builder.query<Launch[], void>({
      query: () => '/launches',
    }),
    getLaunchByFlightNo: builder.query<Launch, string>({
      query: (flightNo) => `/launches/${flightNo}`,
    }),
  }),
});

export const { useGetLaunchesQuery, useGetLaunchByFlightNoQuery } = launchesApi;
