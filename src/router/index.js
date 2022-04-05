import Vue from "vue";
import Router from "vue-router";
import Register from "@/components/Register";
import UserList from "@/components/UserList";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Register",
      component: Register,
    },
    {
      path: "/user-list",
      name: "User List",
      component: UserList,
    },
  ],
});
