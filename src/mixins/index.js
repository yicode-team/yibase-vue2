import Vue from 'vue';
import Vuex from 'vuex';

Vue.mixin({
    data() {
        return {
            ddd: 1
        };
    },
    computed: {
        ...Vuex.mapState([])
    },
    methods: {
        // 通用突变
        ...Vuex.mapMutations(['YiMutation']),
        // 通用动作
        ...Vuex.mapActions(['YiAction']),
        // 公共跳转封装
        goUrl(options) {
            this.$router.push(options);
        }
    }
});
