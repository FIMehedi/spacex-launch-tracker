import type { RadioChangeEvent } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
	changeFilterDate,
	setFilterItems,
	setFilterStatus,
} from '../../../features/launchers/launchersSlice';
import daysCalculatorFromToday from '../../../utils/daysCalculatorFromToday';
import ByLaunchDate from './ByLaunchDate';
import ByLaunchStatus from './ByLaunchStatus';

function Filter() {
	const dispatch = useDispatch();
	const {
		filter: { launchDate, launchStatus },
		search: { findItems, term },
	} = useSelector((state: any) => state.launchers);

	const { data } = useGetLaunchesQuery(null);

	const handleFilterByDate = (e: RadioChangeEvent) => {
		dispatch(changeFilterDate(e.target.value));
		dispatch(setFilterStatus());
	};

	let launchers: object[] = [];

	if (findItems.length) {
		launchers = findItems;
	} else {
		launchers = data;
	}

	const filterByDays = (last_days: number) => {
		const filterItems = launchers.filter((item: any) => {
			console.log(daysCalculatorFromToday(item.launch_date_utc));
			return daysCalculatorFromToday(item.launch_date_utc) <= last_days;
		});
		return filterItems;
	};

	const filterByStatus = (status: boolean) => {
		console.log('run');
		const filterItem = launchers.filter(
			(item: any) => item.launch_success === status
		);
		console.log(filterItem);
		return filterItem;
	};

	useEffect(() => {
		if (launchDate === 'last-week') {
			dispatch(setFilterItems(filterByDays(7)));
		}
		if (launchDate === 'last-month') {
			dispatch(setFilterItems(filterByDays(30)));
		}
		if (launchDate === 'last-year') {
			dispatch(setFilterItems(filterByDays(365)));
		}
		if (launchDate === 'last-5-year') {
			dispatch(setFilterItems(filterByDays(365 * 5)));
		}
		if (launchStatus === 'success') {
			dispatch(setFilterItems(filterByStatus(true)));
		}
		if (launchStatus === 'failure') {
			dispatch(setFilterItems(filterByStatus(false)));
		}
	}, [launchDate, term, launchStatus]);

	return (
		<div className="flex gap-1 py-4">
			<ByLaunchDate
				launchDate={launchDate}
				handleFilterByDate={handleFilterByDate}
			/>
			<ByLaunchStatus />
		</div>
	);
}

export default Filter;
