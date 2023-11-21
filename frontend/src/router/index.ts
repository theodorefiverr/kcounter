import { createRouter, createWebHistory } from "vue-router";
import {matSyncAlt,matReply} from '@quasar/extras/material-icons'

import Tool from "../views/Tool.vue";
import Result from "../views/Result.vue";
import Record from "../views/Records.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Tool",
      meta: {
        icon: "",
      },
      component: Tool,
    },
    {
      path: "/result",
      name: "Result",
      meta: {
        icon: "",
      },
      component: Result,
    },
    {
      path: "/records",
      name: "Records",
      meta: {
        icon: "",
      },
      component: Record,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "Under Construction",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
