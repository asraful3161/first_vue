import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Carousel from '@/components/Carousel'
import PurchaseOrder from '@/components/Purchase_order'
import UserList from '@/components/User_list'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueFire from 'vuefire'

Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(VueFire)

export default new Router({
  routes: [
    {
		path: '/',
		name: 'HelloWorld',
		component: Carousel
    },
    {
		path: '/home',
		name: 'Home',
		component: Home
    },
    {
    	path: '/purchase-order',
    	name: 'Purchase_order',
    	component: PurchaseOrder
    },
    {
    	path: '/user-list',
    	name: 'User_list',
    	component: UserList
    }
  ]
})
