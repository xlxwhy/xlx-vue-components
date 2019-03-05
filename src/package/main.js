
import Vue from 'vue'
import App from './App'
import router from './routers'
import mixins from './mixins/index.js'
Vue.mixin(mixins);

import './icons/index.js'  // icon
import Cookie from 'js-cookie'
Vue.prototype.$cookie = Cookie;

import VuePrototype from "#/utils/vue/VuePrototype.js"
Vue.prototype.$back = VuePrototype.back;
// 处理标题信息
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '-'
  next()
});

// 改写Axios相关的参数

import __axios_global from "#/utils/http/global.js";
import consts from "#/utils/http/consts.js";
__axios_global.AUTH_KEY = consts.AuthKey.MEMBER;       //改写：存储Token的Key
__axios_global.BASE_URL = "http://www.mwt315.com";        //改写：API基础路径
__axios_global.api.authCallback = () => {                 //改写：调用API判断出Token失效时的处理函数
  // const signinUrl = `http://mobile.mwt315.com/mobile/views/admin.html#/login?redirect=` + encodeURIComponent(window.location.href);
  // window.location.href = signinUrl;
}


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
