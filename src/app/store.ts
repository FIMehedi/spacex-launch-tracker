import { configureStore } from '@reduxjs/toolkit';
import { launchesApi } from '../features/api/launches';
import launchersReducer from '../features/launchers/launchersSlice';

const store = configureStore({
  reducer: {
    [launchesApi.reducerPath]: launchesApi.reducer,
    launchers: launchersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(launchesApi.middleware),
});

export default store;
