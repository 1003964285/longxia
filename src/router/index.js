import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//测试
const shouye = r => require.ensure([], () => r(require('@/pages/shouye')), 'shouye')

export default new Router({

	routes: [
		//首页
		{path: '/shouye',name: 'shouye',component: shouye},
		
	]
})