import { useEffect, useState } from 'react';
import { history, useAccess, Outlet, useLocation, useAppData, Access } from '@umijs/max';
import {
  HomeOutlined,
  UserOutlined,
  PieChartOutlined,
  FormOutlined
} from '@ant-design/icons';
import { MenuDataItem, ProLayout, WaterMark } from '@ant-design/pro-components';
import { Avatar, Button, Descriptions, Result, Space, } from 'antd';
import { loopFilterRoute } from '@/utils/Access';
import ResultThree from '@/pages/ResultPage/403';
import RightTitle from '@/components/RightTitle';

export default () => {
  const [pathname, setPathname] = useState('/');
  const { userName, canSeeAdmin, initialState } = useAccess();
  const path = useLocation();
  const route = useAppData().clientRoutes[useAppData().clientRoutes.length - 2].routes;

  useEffect(() => {
    if (path?.pathname) {
      setPathname(path.pathname);
    } else {
      setPathname('/');
    }
  }, [path?.pathname])

  const IcomMap: any = {
    home: <HomeOutlined />,
    PieChartOutlined: <PieChartOutlined />,
    UserOutlined: <UserOutlined />,
    FormOutlined: <FormOutlined />,
  }
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }, index: number) => {
      return {
        ...item,
        icon: icon && IcomMap[icon as string],
        children: children && loopMenuItem(children),
      }
    })
  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        location={{
          pathname,
        }}
        logo={null}
        title={'COU测试平台'}
        locale={'zh-CN'}
        layout={'mix'}
        fixSiderbar//是否固定导航栏
        fixedHeader//是否固定头部
        navTheme={'light'}
        // splitMenus//分隔菜单栏到头部
        menu={{
          request: async () => loopMenuItem(loopFilterRoute(route, initialState.AuthList) || []),
        }}
        onMenuHeaderClick={() => {
          history.replace('/');
          setPathname('/home');
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              history.replace(item.path || '/')
              setPathname(item.path || '/');
            }}
          >
            {dom}
          </a>
        )}
        rightContentRender={() => <RightTitle />}
      // menuFooterRender={(props) => 'footer'}
      >
        <Access
          accessible={canSeeAdmin(path?.pathname)}
          fallback={<ResultThree />}
        >
          <WaterMark content={userName}>
            <Outlet />
          </WaterMark>
        </Access>
      </ProLayout>
    </div >
  );
};