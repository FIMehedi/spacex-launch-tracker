/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { filterByDays, filterByStatus } from '../../utils/filter';
import searchTermMatch from '../../utils/search';

interface InitialState {
  searchAndFilter: {
    isActive: boolean;
    searchTerm: string;
    launchDate:
    | 'all'
    | 'last-week'
    | 'last-month'
    | 'last-year'
    | 'last-5-year';
    launchStatus: 'all' | 'success' | 'failure';
    onlyUpComing: boolean;
    findItems: Object[];
  };
}

const initialState: InitialState = {
  searchAndFilter: {
    isActive: false,
    searchTerm: '',
    launchDate: 'all',
    launchStatus: 'all',
    onlyUpComing: false,
    findItems: [],
  },
};

export const launchersSlice = createSlice({
  name: 'launchers',
  initialState,
  reducers: {
    setSearchFilterStatus: (state:any) => {
      if (
        state.searchAndFilter.searchTerm === ''
        && state.searchAndFilter.launchDate === 'all'
        && state.searchAndFilter.launchStatus === 'all'
        && state.searchAndFilter.onlyUpComing === false
      ) {
        state.searchAndFilter.isActive = false;
        state.searchAndFilter.findItems = [];
      } else {
        state.searchAndFilter.isActive = true;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchAndFilter.searchTerm = action.payload.toLowerCase().trim();
    },
    setLaunchDate: (state, action) => {
      state.searchAndFilter.launchDate = action.payload;
      if (action.payload !== 'all') state.searchAndFilter.onlyUpComing = false;
    },
    setLaunchStatus: (state, action) => {
      state.searchAndFilter.launchStatus = action.payload;
      if (action.payload !== 'all') state.searchAndFilter.onlyUpComing = false;
    },
    setOnlyUpcoming: (state, action) => {
      state.searchAndFilter.onlyUpComing = action.payload;
      if (action.payload) {
        state.searchAndFilter.launchDate = 'all';
        state.searchAndFilter.launchStatus = 'all';
      }
    },
    setFindItems: (state, action) => {
      const launchers = action.payload;
      const filterItems = launchers.filter((item: any) => (
        searchTermMatch(item, state.searchAndFilter.searchTerm)
        && filterByDays(item.launch_date_utc, state.searchAndFilter.launchDate)
        && filterByStatus(item.launch_success, state.searchAndFilter.launchStatus)
        && item.upcoming === state.searchAndFilter.onlyUpComing
      ));
      state.searchAndFilter.findItems = filterItems;
    },
  },
});

export const {
  setFindItems,
  setSearchFilterStatus,
  setSearchTerm,
  setLaunchDate,
  setLaunchStatus,
  setOnlyUpcoming,
} = launchersSlice.actions;

export default launchersSlice.reducer;
