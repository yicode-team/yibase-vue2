<template>
    <div class="page-index">
        page-index444
        <CompT1></CompT1>
    </div>
</template>

<script>
import CompT1 from './components/t1.vue';
export default {
    name: 'Index',
    components: {
        CompT1
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
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
