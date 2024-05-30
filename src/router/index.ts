import { createMemoryHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: "/", component: () => import('../pages/Home.vue') },
  { path: "/hello", component: () => import('../components/HelloWorld.vue') }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
