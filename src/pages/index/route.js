export default {
    route: {
        path: '/',
        component: () => import('@/layout/default/index.vue'),
        children: [
            {
                path: '/',
                component: () => import('@/pages/index/index.vue')
            }
        ]
    }
};
