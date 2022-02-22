export default {
    path: '/404',
    component: () => import('@/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@/pages/404/index.vue')
        }
    ]
};
