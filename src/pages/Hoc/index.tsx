import { deepClone } from '@/utils/format';
import { ProCard } from '@ant-design/pro-components';
import React from 'react'
import Debounce from './Component/Debounce';
import Throttle from './Component/Throttle';
import HocBtn from './HocBtn';


export default () => {
    return (
        <div>
            <ProCard title='穿梭框实现' headerBordered >
                <HocBtn />
            </ProCard>
            <ProCard style={{ margin: '20px 0' }} title='防抖实现' headerBordered >
                <Debounce />
            </ProCard>
            <ProCard title='节流实现' headerBordered >
                <Throttle />
            </ProCard>
        </div>
    )
}
