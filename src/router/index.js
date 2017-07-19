import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/home'
import My from '@/components/my.vue'
import Care from '@/components/care.vue'
import Article from '@/components/article.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/care',
      name: 'care',
      component: Care
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article
    }
  ]
})
