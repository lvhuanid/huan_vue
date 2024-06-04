import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "", 
    component: () => import('../pages/Home.vue'),
    children: [
      { 
        path: "hello", 
        component: () => import('../components/HelloWorld.vue')
      }
    ]
  },
];
// createMemoryHistory()，它会完全忽略浏览器的 URL 而使用其自己内部的 URL
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
