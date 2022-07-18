import { ProCard } from '@ant-design/pro-components';
import React from 'react'
import Debounce from './Component/Debounce';
import Throttle from './Component/Throttle';
import HocBtn from './HocBtn';


export default () => {
    const AssemblyList = [
        {
            title: '穿梭框实现',
            children: <HocBtn />,
        },
        {
            title: '防抖实现',
            children: <Debounce />,
        },
        {
            title: '节流实现',
            children: <Throttle />
        },


    ]
    return (
        <div>
            {
                AssemblyList.map(item => {
                    return (
                        <ProCard style={{ marginBottom: 10 }} key={item.title} title={item.title} headerBordered >
                            {item.children}
                        </ProCard>
                    )
                })
            }
        </div>
    )
}
