// =====================================================
// 自动导入启动文件（勿动）
// =====================================================
let _ = require('lodash');
let importAll = require.context('@/autoload', true, /^\.\/(?!index).+\.js$/);
let sortData = ['directive', 'filter', 'mixin', 'component', 'plugin'].map((str) => {
    return ['./', str, '.js'].join('');
});
//
let autoData = _.sortBy(importAll.keys(), sortData);
autoData.map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
