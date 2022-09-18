import Vue from 'vue';
import Vuex from 'vuex';
import { set as _set } from 'lodash-es';
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        globalData: {}
    },
    mutations: {
        // 通用提交方法
        $Commit(state, payload) {
            _set(state, payload.path, payload.data);
        }
    }
});

export default store;
