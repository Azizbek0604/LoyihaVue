import { createRouter, createWebHistory } from 'vue-router'
import {HomeView, RegisterView, LoginView, ArticleDetailView, CreateArticleView} from "@/views"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/',
      name: 'home', 
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },  
    {
      path: '/articles/:slug',
      name: 'article-details',
      component: ArticleDetailView,
    },  
    {
      path: '/create-article',
      name: 'create-article',
      component: CreateArticleView,
    },
  ]
})

export default router
