import Vue from 'vue';
import $Storage from 'store2';
$Storage.namespace(YICODE_ENV.namespace);

// 给页面直接调用
Vue.prototype.$Storage = $Storage;

// 提供给手动导入使用
export default $Storage;
