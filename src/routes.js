/**
 * @file 路由配置
 * @author mengke01(kekee000@gmail.com)
 */

export default [
    {
        path: '/',
        redirect: '/home'
    },
    // home 模块
    {
        path: '/home',
        component: require('./views/Home.vue'),
    },
    // home 二级模块
    {
        path: '/home/profile',
        component: require('./views/home/Profile.vue')
    },
    {
        path: '/home/list',
        component: require('./views/home/List.vue')
    },
    {
        path: '/home/detail',
        component: require('./views/home/Detail.vue')
    }

];
