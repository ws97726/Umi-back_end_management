import { Input } from 'antd'
import React, { useCallback } from 'react'


//节流
const throttle = (fn, interval) => {
    let timer;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args);
                timer = null;
            }, interval)
        }
    }
}

export default () => {
    const handleSearch = useCallback(
        throttle((e) => {
            console.log(1111, e.target.value);
        }, 1000),
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