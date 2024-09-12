import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/recommend',
    // component: () => import('../pages/Home.vue'),
    component: () => import('../pages/Recommand.vue'),
    children: [
      { 
        path: "hello", 
        component: () => import('../components/HelloWorld.vue')
      },    
      { 
        path: "about",
        component: {
          template: '<h1>About</h1>'
        }
      },
      { 
        path: "services", 
        component: {
          template: '<h1>services</h1>'
        } 
      }
    ]
  },
];
// createMemoryHistory()，它会完全忽略浏览器的 URL 而使用其自己内部的 URL
// 不同的历史模式 https://router.vuejs.org/zh/guide/essentials/history-mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
