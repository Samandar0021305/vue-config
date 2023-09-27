import {createRouter , createWebHistory} from "vue-router"

import Home from "../pages/Home.vue";
import About from "../pages/About.vue"

const routes = [
    {
    paht:"/",
    component:Home
    },
    {
        path:"/about",
        component:About
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, left: 0 };
      },
    
})

// router.beforeEach((to, from, next) => {
//     const role = localStorage.getItem("role");
  
//     if (role != 1 && to.path != "/auth/sign-in") {
//       router.push("/auth/sign-in");
//     } else if (to.name == "Error" || to.path == "/") {
//       if (role == 1) {
//         router.push("/cabinet/admin/statistics");
//       } else {
//         router.push("/auth/sign-in");
//       }
//     } else {
//       next();
//     }
//   });
  


export default router