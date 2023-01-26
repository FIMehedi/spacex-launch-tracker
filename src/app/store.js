import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { launchesApi } from '../features/api/launches';

const store = configureStore({
  reducer: {
    [launchesApi.reducerPath] : launchesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware)
});

export default store;
