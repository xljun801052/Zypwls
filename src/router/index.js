import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../views/zypw/homepage/Homepage.vue'
import Pictures from '../views/zypw/pictures/Pictures.vue'
import Profile from '../views/zypw/profile/Profile.vue'
import Vlogs from '../views/zypw/v-logs/Vlogs.vue'
import Article from '../views/xlyspw/article/Article.vue'
import Tecs from '../views/xlyspw/tecs/Tecs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: Pictures
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/vlogs',
    name: 'Vlogs',
    component: Vlogs
  },
  {
    path: '/article',
    name: 'Acticle',
    component: Article
  },
  {
    path: '/tecs',
    name: 'Tecs',
    component: Tecs
  }
]



const router = new VueRouter({
  routes,
  // 默认是hash方式，存在#号在URL中，替换成history模式
  mode: 'history'
})

export default router
