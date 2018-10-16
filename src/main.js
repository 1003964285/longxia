// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import Axios from 'axios'
import ElementUI from 'element-ui'


import 'element-ui/lib/theme-chalk/index.css'
import './styles/fonts/iconfont.css'
import Ts,{D} from '@/config/tools.js'




Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.Ts = Ts;
Vue.prototype.D = D;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})