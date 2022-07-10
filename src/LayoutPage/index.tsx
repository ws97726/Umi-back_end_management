import React from 'react'
import Layout from './Layout'
import cookieUtils from '@/utils/cookieUtils';
import { history } from '@umijs/max';


export default () => {
    return (
        <>
            {
                cookieUtils.getCookie('session') ?
                    <Layout />
                    : history.replace('/user/login')
            }
        </>
    )
}