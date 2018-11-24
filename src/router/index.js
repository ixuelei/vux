import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import footMenu from '@/components/footMenu'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld
		}, { //底部导航
			path: '/footMenu',
			name: 'footMenu',
			component: footMenu,
		  children:[{//首页
		  	path:'/index',
		  	name:'index',
		  	component:index
		  }]
		}

	]
})