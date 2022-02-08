<template>
    <div class="page-index">
        page-index
        {{ $t('name') }}
    </div>
</template>

<route>
{
    path: '/',
    component: () => import('@/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@/pages/index.vue')
        }
    ]
}
</route>

<script>
export default {
    name: 'Index',
    components: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        // 简单事件中心
        on() {}
    }
};
</script>

<style lang="scss" scoped>
// 组件作用域方案
// 所有样式不会影响组件和框架
.page-index {
}
</style>
