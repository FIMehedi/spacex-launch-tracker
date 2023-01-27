import { Button, Group, RadioChangeEvent } from 'antd/es/radio';
import { useDispatch, useSelector } from 'react-redux';
import {
	setFilterStatus,
	setLaunchStatus,
} from '../../../features/launchers/launchersSlice';

const ByLaunchStatus = () => {
	const {
		filter: { launchStatus },
	} = useSelector((state: any) => state.launchers);

	const dispatch = useDispatch();

	const handleStateChange = (e: RadioChangeEvent) => {
		dispatch(setLaunchStatus(e.target.value));
		dispatch(setFilterStatus());
	};

	return (
		<div>
			<Group value={launchStatus} onChange={handleStateChange}>
				<Button value="all">All</Button>
				<Button value="success">Success</Button>
				<Button value="failure">Failure</Button>
			</Group>
		</div>
	);
};

export default ByLaunchStatus;
