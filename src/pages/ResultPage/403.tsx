import { Result, Button } from 'antd';
import React from 'react';
import { history } from '@umijs/max';

export default () => {
    return (
        <Result
            status="403"
            title="403"
            subTitle="对不起，你暂无权限访问。"
            extra={<Button onClick={() => history.replace('/')} type="primary">Back Home</Button>}
        />
    )
}