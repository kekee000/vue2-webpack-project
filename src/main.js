/**
 * @file 入口处理
 * @author mengke01(kekee000@gmail.com)
 */
require('./css/main.styl');

import Vue from 'vue';

// datasource
Vue.prototype.$datasource = require('./datasource');

// router
import VueRouter from 'vue-router';
import routes from './routes';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: routes
});

router.beforeEach((to, from, next) => {
    next();
});



/* eslint-disable no-new */
import App from './App';
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
});
