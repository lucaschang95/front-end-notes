# 导航守卫

**navigation guards**





### 完整的导航解析流程

1. 导航被触发
2. 在失活的组件中调用`beforeRouteLeave`守卫
3. 调用全局`beforeEach`守卫
4. 在重用的组件里调用`beforeRouteUpdate`守卫
5. 在路由配置里调用`beforeEnter`
6. 解析一步路有组件
7. 在被激活的组件里调用`beforeRouteEnter`
8. 调用全局的`beforeResolve`守卫
9. 导航被确认
10. 调用全局的`afterEach`钩子
11. 触发DOM更新
12. 用创建好的实例调用`beforeRouteEnter`守卫传给`next`的回调函数