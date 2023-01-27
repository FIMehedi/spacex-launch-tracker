import { Button, Group } from 'antd/es/radio';
import { FC } from 'react';

interface Props {
	handleStatusFilter: any;
	launchStatus: string;
}

const ByLaunchStatus: FC<Props> = ({ launchStatus, handleStatusFilter }) => {
	return (
		<div>
			<Group value={launchStatus} onChange={handleStatusFilter}>
				<Button value="all">All</Button>
				<Button value="success">Success</Button>
				<Button value="failure">Failure</Button>
			</Group>
		</div>
	);
};

export default ByLaunchStatus;
