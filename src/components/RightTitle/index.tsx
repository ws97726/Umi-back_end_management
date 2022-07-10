import React from 'react'
import userPng from '@/assets/user.png';
import { Dropdown, Menu, message, Modal } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import cookieUtils from '@/utils/cookieUtils';
import { history, useAccess } from '@umijs/max';


export default () => {
    const { userName } = useAccess();
    const menu = (
        <Menu>
            <Menu.Item
                key='goLogin'
                onClick={() => {
                    Modal.confirm({
                        content: '你确定要退出登录？',
                        onOk: () => {
                            cookieUtils.removeCookie('session');
                            message.success('退出登录成功！');
                            history.replace('/user/login');
                        }
                    })
                }}
            >
                <LogoutOutlined /> 退出登录
            </Menu.Item>
        </Menu>
    )
    return (
        <div style={{ color: '#fff', fontSize: 16 }}>
            <Dropdown overlay={menu} placement='bottom' arrow>
                <div>
                    <span>Hi, {userName}</span>
                    <img src={userPng} style={{ height: 30, marginLeft: 10 }} />
                </div>
            </Dropdown>
        </div>
    )
}