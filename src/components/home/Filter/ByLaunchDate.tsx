import React from 'react';
import { Button, Group } from 'antd/es/radio';

interface Props {
  handleDateFilter: any;
  launchDate: string;
}

function ByLaunchDate({ launchDate, handleDateFilter }: Props): JSX.Element {
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
}

export default ByLaunchDate;
