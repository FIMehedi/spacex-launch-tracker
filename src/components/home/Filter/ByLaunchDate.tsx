import { Button, Group } from 'antd/es/radio';
import { FC } from 'react';

interface Props {
	handleDateFilter: any;
	launchDate: string;
}

const ByLaunchDate: FC<Props> = ({ launchDate, handleDateFilter }) => {
	return (
		<div>
			<Group value={launchDate} onChange={handleDateFilter}>
				<Button value="all">All Time</Button>
				<Button value="last-week">Last Week</Button>
				<Button value="last-month">Last Month</Button>
				<Button value="last-year">Last Year</Button>
				<Button value="last-5-year">Last 5 Years</Button>
			</Group>
		</div>
	);
};

export default ByLaunchDate;
