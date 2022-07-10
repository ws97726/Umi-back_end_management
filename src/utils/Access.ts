//过滤路由展示后端返回的
const loopFilterRoute = (routeList: any, authList: any) => {
    return routeList.map((item: any) => {
        if (item.children && authList.includes(item.path)) {
            return {
                ...item,
                children: loopFilterRoute(item.children, authList),
                routes: loopFilterRoute(item.children, authList),
            }
        } else if (authList.includes(item.path)) {
            return item;
        }
    }).filter((item: undefined) => item !== undefined);
}



export {
    loopFilterRoute,
}