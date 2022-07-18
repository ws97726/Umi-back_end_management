import { ProCard } from '@ant-design/pro-components';
import React from 'react'
import Intersect from './Component/Intersect';




export default () => {

    const AssemblyList = [
        {
            title: '查找表问题',
            children: <Intersect />,
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
