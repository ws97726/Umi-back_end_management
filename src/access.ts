export default (initialState: API.UserInfo) => {
  // 在这里按照初始化数据定义项目中的权限，统一管理
  // 参考文档 https://next.umijs.org/docs/max/access
  return {
    initialState,
    userName: '管理员',
    canSeeAdmin: (path: string) => {
      // initialState.RouteList.includes(path);
      return initialState.AuthList.includes(path);
    },
  };
};
