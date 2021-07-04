import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home";
import Casting from "@/views/casting";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "PrimeBot",
    routes: [
        {
            path: "/",
            alias: "/home",
            name: "home",
            component: Home,
        },
        {
            path: "/casting",
            name: "casting",
            component: Casting
        },
    ]
});