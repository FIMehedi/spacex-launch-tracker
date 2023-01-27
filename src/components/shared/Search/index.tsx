import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
	setFindItems,
	setSearchFilterStatus,
	setSearchTerm,
} from '../../../features/launchers/launchersSlice';

const Search = () => {
	const dispatch = useDispatch();
	const { searchTerm } = useSelector(
		(state: any) => state.launchers.searchAndFilter
	);

	const { isSuccess, data } = useGetLaunchesQuery(null);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setFindItems(data));
			dispatch(setSearchFilterStatus());
		}
	}, [searchTerm, isSuccess]);

	return (
		<div className="relative">
			<input
				onChange={(e) => dispatch(setSearchTerm(e.target.value))}
				type="text"
				placeholder="Search by flight name"
				className="bg-[#444] rounded py-1 px-2 text-emerald-400 outline-none font-medium w-[280px]"
			/>
		</div>
	);
};

export default Search;
