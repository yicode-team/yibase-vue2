// 插件参数配置，用于控制
module.exports = {
    projectType: 'vue-single',
    // 自适应配置
    px2viewport: {
        enable: false
    },
    // eslint参数
    eslint: {},
    // webpack配置
    webpackConfig: {
        // 开发配置
        devServer: {},
        // 全局模块
        providePlugin: {},
        // 外部模块
        externals: {}
    }
};
