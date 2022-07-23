import { createRouter, createMemoryHistory } from 'vue-router'
// 引入布局组件
import Layout from '@/views/Layout'

const routes = [
  {
    path: '/',
    name: 'Index',
    activeClass: false,
    meta: {
      name: "首页"
    },
    component: Layout,
    children: [
      {
        path: "/",
        meta: {
          name: "首页"
        },
        component: () => import("../views/index.vue")
      },
      {
        path: "/brand",
        meta: {
          name: "品牌介绍"
        },
        component: () => import("../views/brand.vue")
      },
      {
        path: "/food",
        meta: {
          name: "美食推荐"
        },
        component: () => import("../views/food.vue")
      },
      {
        path: "/profit",
        meta: {
          name: "盈利模式"
        },
        component: () => import("../views/profit.vue")
      },
      {
        path: "/cooperation",
        meta: {
          name: "合作共赢"
        },
        component: () => import("../views/cooperation.vue")
      },
      {
        path: "/news",
        meta: {
          name: "新闻资讯"
        },
        component: () => import("../views/news.vue")
      },
      {
        path: "/contact",
        meta: {
          name: "联系我们"
        },
        component: () => import("../views/contact.vue")
      },
      {
        path: "/newsDetail/:item?",
        name: "NewsDetail",
        hidden: true,
        meta: {
          name: "新闻详情"
        },
        component: () => import("../components/newsDetail.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes
})

export default router
