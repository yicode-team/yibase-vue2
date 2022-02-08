// =====================================================
// 全局指令导入
// =====================================================
let importAll = require.context('@/directives', true, /\.js$/);
importAll.keys().map((path) => {
    importAll(path).default || importAll(path);
});
// =====================================================
