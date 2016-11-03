/**
 * @file 入口处理
 * @author mengke01(kekee000@gmail.com)
 */

require('./css/main.styl');
require('./lib/directive/log');

import config from './config';
import log from './lib/log';
log.config(config.log).start();

import Vue from 'vue';

// directives

// log相关
Vue.prototype.$log = log;
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

router.afterEach((to, from, next) => {
    // 设置view切换log
    var logName = to.name || to.path.replace(/^\/|\/$/g, '').replace(/\//g, '_');
    log.send({
        page: logName
    });
});


/* eslint-disable no-new */
import App from './App';
new Vue({
    router,
    el: '#app',
    template: '<App/>',
    components: { App }
});
