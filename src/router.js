import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";
import Welcome from "./components/Welcome";
import Chat from "./components/Chat";
import PageNotFound from "./components/PageNotFound";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/chat",
      name: "Chat",
      component: Chat,
      props: true,
      beforeEnter: (to, from, next) => {
        // if name exist 
        if (to.params.name) {
          next()
        }
        // go back
        else {
          next({name: 'Welcome'})
        }
      }
    },
    {
      path: "**",
      name: "PageNotFound",
      meta: { title: `Page not found` },
      component: PageNotFound
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
