import React from 'react';
import { Space,Spin } from 'antd';

const Spinner = () => (
    <Space direction="vertical" style={{ width: '100%', padding: '10px' }} align='center' >
        <Spin size='large' direction='vertical' />
    </Space>
);
export default Spinner;