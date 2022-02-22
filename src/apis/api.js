import Vue from 'vue';
import axios from 'axios';
import $Storage from '@/plugins/storage.js';
// =============================================
// TODO: 将无效参数的过滤封装到这里，由用户进行控制
// TODO: 此处封装统一弹框
let request = axios.create({
    method: 'get',
    baseURL: YICODE_ENV.host,
    timeout: 1000 * 60,
    withCredentials: false,
    // responseType: "json",
    // responseEncoding: 'utf8',
    // maxContentLength: 2000,
    headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'application/json;utf-8'
    }
});
// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function (res) {
        Promise.resolve(res.data);
        return;

        /**
         * 响应拦截，以下仅为示例，请根据项目需求调整。
         */

        // 令牌验证失败
        // if (res.data.ret === 401) {
        //     location.hash = "#/login";
        //     return;
        // }

        // if (res.data.ret === 500) {
        //     Notice.error({
        //         title: "服务器错误",
        //         desc: res.data.msg,
        //     });
        //     Promise.reject(res.data);
        //     return;
        // }

        // if (res.data.msg) {
        //     Message.info({
        //         content: res.data.msg,
        //         duration: 5,
        //     });
        //     return;
        // }

        // 其他错误
        // Promise.reject(res.data);
        // return;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

// 将接口挂载到 Vue 实例，使用 this.$Api({url:'test.com'}).then(res => {}) 调用接口。
Vue.prototype.$Api = request;
export default request;
