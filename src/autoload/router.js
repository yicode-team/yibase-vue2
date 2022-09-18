import Vue from 'vue';
import VueRouter from 'vue-router';

import {
    //
    kebabCase as _kebabCase,
    merge as _merge,
    cloneDeep as _cloneDeep
} from 'lodash-es';

// 处理路由重复导航问题
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);
let routeList = [];
let routeContext = require.context('@/pages', true, /route\.js$/);
let layoutContext = require.context('@/layouts', true, /index\.vue$/);
let pageContext = require.context('@/pages', true, /index\.vue$/);
routeContext.keys().map((file) => {
    let routePath = _kebabCase(file.replace('/route.js', '').replace('.', '').replace(/\/+/gi, 'oooooo'))
        .replace(/oooooo/gi, '/')
        .replace(/\/-/gi, '/');
    let routeData = routeContext(file).default || routeContext(file);

    let pageFile = file.replace('/route.js', '/index.vue');
    let pagePath = file.replace('/route.js', '/index.vue').replace('.', '/src/pages');
    let pageData = pageContext(pageFile).default || pageContext(pageFile);

    let layoutFile = routeData.layout || 'default';
    let layoutPath = `./${layoutFile}/index.vue`;
    let layoutData = layoutContext(layoutPath).default || layoutContext(layoutPath);

    // 如果没有设置路由，则自动设置（考虑是否禁止手动设置）
    routeData.path = routePath === '/index' ? '/' : routePath;

    if (routeData.layout !== undefined) {
        // 如果定义了框架属性
        if (routeData.layout !== false) {
            routeData.component = layoutData;
            // 定义当前页面组件
            routeData.children = _merge(
                [
                    {
                        path: '/',
                        component: pageData
                    }
                ],
                _cloneDeep(routeData.children || [])
            );
        } else {
            // 如果框架为false，则当前页面取代框架位置
            routeData.component = pageData;
        }
    } else {
        // 如果没有定义框架，则默认每个页面都有框架
        routeData.component = layoutData;
        // 定义当前页面组件
        routeData.children = _merge(
            [
                {
                    path: '/',
                    component: pageData
                }
            ],
            _cloneDeep(routeData.children || [])
        );
    }
    routeList.push(routeData);
});
// 导入自动生成的路由文件
let router = new VueRouter({
    routes: routeList
});
export default router;
