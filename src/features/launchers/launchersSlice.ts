import { createSlice } from '@reduxjs/toolkit';
import { filterByDays, filterByStatus } from '../../utils/filter';

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
		setSearchFilterStatus: (state) => {
			if (
				state.searchAndFilter.searchTerm === '' &&
				state.searchAndFilter.launchDate === 'all' &&
				state.searchAndFilter.launchStatus === 'all' &&
				state.searchAndFilter.onlyUpComing === false
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
		},
		setLaunchStatus: (state, action) => {
			state.searchAndFilter.launchStatus = action.payload;
		},
		setOnlyUpcoming: (state, action) => {
			state.searchAndFilter.onlyUpComing = action.payload;
		},
		setFindItems: (state, action) => {
			const launchers = action.payload;
			const filterItems = launchers.filter(
				(item: any) =>
					item.rocket.rocket_name
						.toLowerCase()
						.includes(state.searchAndFilter.searchTerm) &&
					filterByDays(
						item.launch_date_utc,
						state.searchAndFilter.launchDate
					) &&
					filterByStatus(
						item.launch_success,
						state.searchAndFilter.launchStatus
					) &&
					item.upcoming === state.searchAndFilter.onlyUpComing
			);
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
