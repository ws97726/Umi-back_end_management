import { Result, Button } from 'antd';
import React from 'react';
import { history } from '@umijs/max';

export default () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="对不起，你访问的页面不存在。"
            extra={<Button onClick={() => history.replace('/')} type="primary">Back Home</Button>}
        />
    )
}