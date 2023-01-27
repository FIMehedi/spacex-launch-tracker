import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: {
		term: '',
		isSearching: false,
		findItems: [],
	},
	filter: {
		isFilterActive: false,
		launchDate: 'all-time',
		launchStatus: 'all',
		onlyUpcoming: false,
		filterItems: [],
	},
};

export const launchersSlice = createSlice({
	name: 'launchers',
	initialState,
	reducers: {
		getSearchTerm: (state, action) => {
			state.search.term = action.payload.toLowerCase();
			if (!state.search.term) {
				state.search.findItems = [];
			}
		},
		setSearchItem: (state, action) => {
			state.search.findItems = action.payload;
		},
		setSearchingStatus: (state, action) => {
			state.search.isSearching = action.payload;
		},
		setLaunchStatus: (state, action) => {
			state.filter.launchStatus = action.payload;
		},
		setFilterStatus: (state) => {
			if (
				state.filter.launchDate === 'all-time' &&
				state.filter.launchStatus === 'all' &&
				state.filter.onlyUpcoming === false
			) {
				state.filter.isFilterActive = false;
				state.filter.filterItems = [];
			} else {
				state.filter.isFilterActive = true;
			}
		},
		changeFilterDate: (state, action) => {
			state.filter.launchDate = action.payload;
		},
		setFilterItems: (state, action) => {
			state.filter.filterItems = action.payload;
		},
	},
});

export const {
	getSearchTerm,
	setSearchItem,
	setSearchingStatus,
	setFilterStatus,
	changeFilterDate,
	setFilterItems,
	setLaunchStatus,
} = launchersSlice.actions;

export default launchersSlice.reducer;
