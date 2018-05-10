import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Logoin from '../pages/Logoin'
import Index from '../pages/Index'
import detail from '../pages/detail'
import detailDetail from '../pages/detailDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
    	name: 'Logoin',
      path: "/Logoin",
      component: Logoin
    },
    {
    	path: '/detail',
			component: detail,
			name: 'detail'
			children: [
			    {
			        path: 'detailDetail',
			        component: detailDetail,
			        name: 'detailDetail'
			    }
			]
    }
  ]
})
