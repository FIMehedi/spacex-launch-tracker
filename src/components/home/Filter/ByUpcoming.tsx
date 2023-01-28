import React from 'react';
import { Button, Group, RadioChangeEvent } from 'antd/es/radio';

interface Props {
  handleUpcomingFilter: (e: RadioChangeEvent) => void;
  onlyUpComing: boolean;
}

function ByUpcoming({ onlyUpComing, handleUpcomingFilter }:Props): JSX.Element {
  return (
    <div>
      <Group value={onlyUpComing} onChange={handleUpcomingFilter}>
        <Button value={false}>All</Button>
        <Button value>Upcoming</Button>
      </Group>
    </div>
  );
}

export default ByUpcoming;
