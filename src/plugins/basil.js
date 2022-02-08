import Vue from 'vue';
const Basil = require('basil.js');

let basil = new Basil({
    namespace: YICODE_ENV.namespace,
    storages: ['session', 'cookie', 'local', 'memory'],
    storage: 'local'
});

// 提供给页面通过 this.$Basil 调用
Vue.prototype.$Basil = basil;

// 提供给手动导入使用
export default basil;
