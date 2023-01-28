import React from 'react';
import { Button, Group } from 'antd/es/radio';

interface Props {
  handleStatusFilter: any;
  launchStatus: string;
}
function ByLaunchStatus({ launchStatus, handleStatusFilter }:Props): JSX.Element {
  return (
    <div>
      <Group value={launchStatus} onChange={handleStatusFilter}>
        <Button value="all">All</Button>
        <Button value="success">Success</Button>
        <Button value="failure">Failure</Button>
      </Group>
    </div>
  );
}

export default ByLaunchStatus;
