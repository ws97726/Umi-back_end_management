import { Button, Input } from 'antd'
import React, { useCallback, useState } from 'react'
import Field from '@ant-design/pro-field';


export default () => {
    const [state, setState] = useState<boolean>(false);
    const num1 = [4, 9, 12, 5, 4];
    const num2 = [4, 4, 9, 12, 3];

    const makeCountMap = (nums) => {
        let map = new Map();
        nums.forEach(item => {
            let count = map.get(item);
            if (count !== undefined) {
                map.set(item, count + 1)
            } else {
                map.set(item, 1)
            }
        });
        return map;
    }

    const intersect = (num1, num2) => {
        let map1 = makeCountMap(num1);
        let map2 = makeCountMap(num2);
        let res = []
        map1.keys().forEach(item => {
            const count1 = map1.get(item);
            const count2 = map2.get(item);
            if (count2) {
                const pushCount = Math.min(count1, count2);
                for (let i = 0; i < pushCount; i++) {
                    res.push(item)
                }
            }
        });
        return res;
    }

    console.log(intersect(num1, num2))
    return (
        <div>
            <Field
                text={`两个数组的交集\n\n示例 ：\n输入：num1 = [1,2,2,1], num2=[2,2]\n输出：[2,2]`}
                valueType="code"
                mode={'read'}
                plain={false}
            />
            <Button onClick={() => setState(!state)} type={'primary'}>查看实例 {state ? '↓' : '↑'}</Button>
            {
                state &&
                <Field
                    text={`
        const makeCountMap = (nums) => {
                let map = new Map();
                    nums.forEach(item => {
                        let count = map.get(item);
                        if (count !== undefined) {
                            map.set(item, count + 1)
                        } else {
                            map.set(item, 1)
                        }
                    });
                    return map;
                }
            
                const intersect = (num1, num2) => {
                    let map1 = makeCountMap(num1);
                    let map2 = makeCountMap(num2);
                    let res = []
                    map1.keys().forEach(item => {
                        const count1 = map1.get(item);
                        const count2 = map2.get(item);
                        if (count2) {
                            const pushCount = Math.min(count1, count2);
                            for (let i = 0; i < pushCount; i++) {
                                res.push(item)
                            }
                        }
                    });
            return res;
        }
                `}
                    valueType="code"
                    mode={'read'}
                    plain={false}
                />
            }
        </div>
    )
}