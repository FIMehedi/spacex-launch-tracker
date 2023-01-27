import { RadioChangeEvent } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
	setFindItems,
	setLaunchDate,
	setLaunchStatus,
	setOnlyUpcoming,
	setSearchFilterStatus,
} from '../../../features/launchers/launchersSlice';
import ByLaunchDate from './ByLaunchDate';
import ByLaunchStatus from './ByLaunchStatus';
import ByUpcoming from './ByUpcoming';

function Filter() {
	const dispatch = useDispatch();
	const { launchDate, launchStatus, onlyUpComing } = useSelector(
		(state: any) => state.launchers.searchAndFilter
	);

	const { data, isSuccess } = useGetLaunchesQuery(null);

	useEffect(() => {
		if (isSuccess) dispatch(setFindItems(data));
	}, [launchDate, launchStatus, isSuccess, onlyUpComing]);

	const handleDateFilter = (e: RadioChangeEvent) => {
		dispatch(setLaunchDate(e.target.value));
		dispatch(setSearchFilterStatus());
	};

	const handleStatusFilter = (e: RadioChangeEvent) => {
		dispatch(setLaunchStatus(e.target.value));
		dispatch(setSearchFilterStatus());
	};

	const handleUpcomingFilter = (e: RadioChangeEvent) => {
		dispatch(setOnlyUpcoming(e.target.value));
		dispatch(setSearchFilterStatus());
	};

	return (
		<div className="flex justify-center gap-1 py-4">
			<ByLaunchDate
				launchDate={launchDate}
				handleDateFilter={handleDateFilter}
			/>
			<ByLaunchStatus
				launchStatus={launchStatus}
				handleStatusFilter={handleStatusFilter}
			/>
			<ByUpcoming
				onlyUpComing={onlyUpComing}
				handleUpcomingFilter={handleUpcomingFilter}
			/>
		</div>
	);
}

export default Filter;
