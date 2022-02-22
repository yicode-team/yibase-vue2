import Vue from 'vue';
import VueRouter from 'vue-router';

// 处理路由重复导航问题
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

let routeList = [];
let importAll = require.context('@/pages', true, /route\.js$/);
importAll.keys().map((path) => {
    let route = importAll(path).default || importAll(path);
    routeList.push(route);
});

// 导入自动生成的路由文件
let router = new VueRouter({
    routes: routeList
});

export default router;
