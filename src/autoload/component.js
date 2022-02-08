// =====================================================
// 全局接口导入
// =====================================================
import Vue from 'vue';
let importAll = require.context('@/components', true, /\.vue$/);
importAll.keys().map((path) => {
    let component = importAll(path).default || importAll(path);
    Vue.component(component.name, component);
});
// =====================================================
