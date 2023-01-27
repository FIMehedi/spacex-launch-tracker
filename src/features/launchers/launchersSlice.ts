import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: {
		term: '',
		isSearching: false,
		findItems: [],
	},
	filter: {
		isFilterActive: false,
		date: 'all-time',
		status: 'all',
		upcoming: false,
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
		setFilterStatus: (state) => {
			if (state.filter.date === 'all-time') {
				state.filter.isFilterActive = false;
				state.filter.filterItems = []
			} else {
				state.filter.isFilterActive = true;
			}
		},
		changeFilterDate: (state, action) => {
			state.filter.date = action.payload;
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
} = launchersSlice.actions;

export default launchersSlice.reducer;
