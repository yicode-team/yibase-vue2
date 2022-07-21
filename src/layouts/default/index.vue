<template>
    <div class="layout-default">
        <LayoutHeader></LayoutHeader>
        <div class="layout-container">
            <div class="layout-main">
                <router-view name="default"></router-view>
            </div>
        </div>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<script>
import LayoutHeader from './header.vue';
import LayoutFooter from './footer.vue';
// import LayoutMenu from './menu.vue';
export default {
    name: 'LayoutDefault',
    components: {
        LayoutHeader,
        // LayoutMenu,
        LayoutFooter
    }
};
</script>

<style lang="scss">
.layout-default {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
    .layout-container {
        position: absolute;
        left: 0;
        right: 0;
        bottom: $layout-footer-height;
        top: $layout-header-height;
        border-radius: $global-border-radius-width;
    }
    .layout-main {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto auto;
    }
}
</style>
