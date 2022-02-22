import Vue from 'vue';
import Vuex from 'vuex';

Vue.mixin({
    data() {
        return {};
    },
    computed: {
        ...Vuex.mapState([])
    },
    methods: {
        // 通用突变
        ...Vuex.mapMutations(['$Commit']),
        // 触发父级
        async onParent(obj) {
            // 修改data数据
            _.forOwn(obj.data, (value, key) => {
                _.set(this, key, value);
            });

            _.forEach(obj.method, (funcName) => {
                this[funcName]();
            });
        }
    }
});
