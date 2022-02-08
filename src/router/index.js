import router from '@/autoload/router.js';

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // 此处写全局前置守卫逻辑223
    if (to.matched.length === 0) {
        next('/404');
    } else {
        next();
    }
});

// 全局后置守卫
router.afterEach((to, from) => {
    // 此处写全局后置守卫逻辑
});

export default router;
