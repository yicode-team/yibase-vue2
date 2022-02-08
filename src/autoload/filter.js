// =====================================================
// 全局过滤器导入
// =====================================================
let importAll = require.context('@/filters', true, /\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
