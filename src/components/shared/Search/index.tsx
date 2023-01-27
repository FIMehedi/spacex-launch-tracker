import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import {
	getSearchTerm,
	setSearchingStatus,
	setSearchItem,
} from '../../../features/launchers/launchersSlice';

const Search = () => {
	const dispatch = useDispatch();
	const {
		search: { term },
	} = useSelector((state: any) => state.launchers);

	const { isSuccess, data } = useGetLaunchesQuery(null);

	useEffect(() => {
		if (term && isSuccess) {
			dispatch(setSearchingStatus(true));
			const findByRocketName = data.filter((launch: any) =>
				launch.rocket.rocket_name.toLowerCase().includes(term)
			);
			dispatch(setSearchItem(findByRocketName));
			dispatch(setSearchingStatus(false));
		}
	}, [term, isSuccess]);

	return (
		<div className="relative">
			<input
				onChange={(e) => dispatch(getSearchTerm(e.target.value))}
				type="text"
				placeholder="Search by flight name"
				className="bg-[#444] rounded py-1 px-2 text-emerald-400 outline-none font-medium w-[280px]"
			/>
		</div>
	);
};

export default Search;
