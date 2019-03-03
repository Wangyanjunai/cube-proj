import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CubeDialog from '@/components/CubeDialog'
import MyTabBar from '@/components/MyTabBar'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'myTabBar',
      component: MyTabBar
    }
  ]
})
