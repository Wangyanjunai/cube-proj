import Vue from 'vue'
import Router from 'vue-router'
import CubeDialog from '@/components/CubeDialog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cubeDialog',
      component: CubeDialog
    }
  ]
})
