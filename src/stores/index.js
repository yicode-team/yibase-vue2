import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        globalData: {}
    },
    mutations: {
        // 通用提交方法
        $Commit(state, payload) {
            _.set(state, payload.path, payload.data);
        }
    }
});

export default store;
