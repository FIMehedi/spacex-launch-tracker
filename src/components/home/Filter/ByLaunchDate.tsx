import { Button, Group } from 'antd/es/radio';
import { FC } from 'react';

interface Props {
	launchDate: string;
	handleFilterByDate: any;
}

const ByLaunchDate: FC<Props> = ({ launchDate, handleFilterByDate }) => {
	return (
		<div>
			<Group value={launchDate} onChange={handleFilterByDate}>
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
