import { LoadingOutlined } from '@ant-design/icons';
import { Row, Spin } from 'antd';
import { useSelector } from 'react-redux';
import { useGetLaunchesQuery } from '../../../features/api/launches';
import LaunchCard from '../LaunchCard';

function LaunchCards() {
	const { isLoading, isError, data } = useGetLaunchesQuery(null);
	const { isActive, findItems } = useSelector(
		(state: any) => state.launchers.searchAndFilter
	);

	if (isError)
		return <p className="text-[#ccc] text-center">Something went wrong!</p>;

	const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
	if (isLoading)
		return (
			<div className="text-center">
				<Spin indicator={antIcon} />
			</div>
		);

	const launchers = isActive ? findItems : data;
	const responsiveGridSpace = { xs: 8, sm: 16, md: 24, lg: 28 };

	return (
		<div>
			<Row
				className="justify-center"
				gutter={[responsiveGridSpace, responsiveGridSpace]}
			>
				{launchers.length ? (
					launchers.map((item: any) => (
						<LaunchCard key={item.flight} item={item} />
					))
				) : (
					<p className="text-[#ccc]">No Data Found!</p>
				)}
			</Row>
		</div>
	);
}

export default LaunchCards;
