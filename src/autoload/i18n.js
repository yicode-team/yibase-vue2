import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
let messages = {};
let importAll = require.context('@/i18n', false, /\.js$/);
importAll.keys().map((path) => {
    let lang = path.replace(/\.[\/\\]*/, '').replace(/\.js$/, '');
    messages[lang] = importAll(path).default || importAll(path);
});
let i18n = new VueI18n({
    locale: 'zh',
    messages: messages
});

export default i18n;
