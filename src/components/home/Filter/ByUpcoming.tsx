import { Button, Group } from 'antd/es/radio';
import { FC } from 'react';

interface Props {
	handleUpcomingFilter: any;
	onlyUpComing: boolean;
}

const ByUpcoming: FC<Props> = ({ onlyUpComing, handleUpcomingFilter }) => {
	return (
		<div>
			<Group value={onlyUpComing} onChange={handleUpcomingFilter}>
				<Button value={false}>All</Button>
				<Button value={true}>Upcoming</Button>
			</Group>
		</div>
	);
};

export default ByUpcoming;
