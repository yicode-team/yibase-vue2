import Vue from 'vue';
import VueRouter from 'vue-router';
import routeList from '../../.cache/routes.js';

// 处理路由重复导航问题
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

// 导入自动生成的路由文件
let router = new VueRouter({
    routes: routeList
});

export default router;
