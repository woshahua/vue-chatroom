import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import About from './views/About.vue'
import Chat from './views/Chat.vue'
import Room from './views/Room.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'room',
      component: Room
    },
    {
      path: '/about',
      name: About,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/chat",
      name: "chat",
      component: Chat, 
    }
  ]
})
