export default [
    {
        name: 'login',
        path: '/user/login',
        component: './User/Login'
    },
    {
        path: '/',
        component: '@/LayoutPage',
        routes: [
            {
                path: '/',
                redirect: '/home',
            },
            {
                name: '首页',
                path: '/home',
                component: './Home',
                icon: 'home',
            },
            {
                name: '权限演示',
                path: '/access',
                component: './Access',
                icon: 'PieChartOutlined',
            },
            {
                name: '测试用例',
                path: '/test',
                icon: 'UserOutlined',
                routes: [
                    {
                        name: '测试列表',
                        path: '/test/testList',
                        component: './Table',
                    }
                ]
            },
            {
                name: '组件封装',
                path: '/hoc',
                component: './Hoc',
                icon: 'PieChartOutlined',
            },
            {
                path: '/*',
                component: './ResultPage/404'
            }
        ]
    },
    {
        path: '/*',
        component: './ResultPage/404'
    }
]