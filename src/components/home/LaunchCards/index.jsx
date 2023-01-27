import { LoadingOutlined } from '@ant-design/icons';
import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import LaunchCard from '../LaunchCard';

function LaunchCards() {
	const { isLoading, isError, data } = useGetLaunchesQuery();
	const {
		search: { findItems, isSearching, term },
		filter: { isFilterActive, filterItems },
	} = useSelector((state) => state.launchers);
	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

	let launchers = [];

	if (isFilterActive) {
		launchers = filterItems;
	} else if (term) {
		launchers = findItems;
	} else {
		launchers = data;
	}

	if (isLoading || isSearching)
		return (
			<div className="text-center">
				<Spin indicator={antIcon} />
			</div>
		);

	const responsiveGridSpace = { xs: 8, sm: 16, md: 24, lg: 28 };

	return (
		<div>
			<Row
				className="justify-center"
				gutter={[responsiveGridSpace, responsiveGridSpace]}
			>
				{launchers.length ? (
					launchers.map((item) => <LaunchCard key={item.flight} item={item} />)
				) : (
					<p className="text-[#ccc]">No Data Found!</p>
				)}
			</Row>
		</div>
	);
}

export default LaunchCards;
