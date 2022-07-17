import { Input } from 'antd'
import React, { useCallback } from 'react'

//防抖
const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) {
            // 取消上一次的定时器
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    };
}

export default () => {

    const handleSearch = useCallback(
        debounce((e) => {
            console.log(1111, e.target.value);
        }, 500),
        []
    )
    const onChange = (e) => {
        handleSearch(e)
    }

    return (
        <div style={{ width: 300 }}>
            搜索框：<Input
                placeholder='请输入'
                onChange={onChange}
            />
        </div>
    )
}