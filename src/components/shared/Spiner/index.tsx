import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

function Spinner() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="text-center">
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Spinner;
