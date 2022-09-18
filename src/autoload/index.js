// =====================================================
// 自动导入启动文件（勿动）
// =====================================================
import { sortBy as _sortBy } from 'lodash-es';
let importAll = require.context('@/autoload', true, /^\.\/(?!index).+\.js$/);
let sortData = ['directive', 'filter', 'mixin', 'component', 'plugin'].map((str) => {
    return ['./', str, '.js'].join('');
});
//
let autoData = _sortBy(importAll.keys(), sortData);
autoData.map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
