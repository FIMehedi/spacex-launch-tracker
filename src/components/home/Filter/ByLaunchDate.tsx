import type { RadioChangeEvent } from 'antd';
import { Button, Group } from 'antd/es/radio';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
	changeFilterDate,
	setFilterItems,
	setFilterStatus,
} from '../../../features/launchers/launchersSlice';
import daysCalculatorFromToday from '../../../utils/daysCalculatorFromToday';

const ByLaunchDate = () => {
	const dispatch = useDispatch();
	const {
		filter: { date },
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
		console.log(filterItems);
		return filterItems;
	};

	useEffect(() => {
		if (date === 'last-week') {
			dispatch(setFilterItems(filterByDays(7)));
		}
		if (date === 'last-month') {
			dispatch(setFilterItems(filterByDays(30)));
		}
		if (date === 'last-year') {
			dispatch(setFilterItems(filterByDays(365)));
		}
		if (date === 'last-5-year') {
			dispatch(setFilterItems(filterByDays(365 * 5)));
		}
	}, [date, term]);

	return (
		<div>
			<Group value={date} onChange={handleFilterByDate}>
				<Button value="all-time">All Time</Button>
				<Button value="last-week">Last Week</Button>
				<Button value="last-month">Last Month</Button>
				<Button value="last-year">Last Year</Button>
				<Button value="last-5-year">Last 5 Years</Button>
			</Group>
		</div>
	);
};

export default ByLaunchDate;
