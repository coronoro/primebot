import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home";
import Scrims from "@/views/scrims";
import Casting from "@/views/casting";

import Discord from "@/views/start/discord"

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
            path: 'discord',
            name: 'discord-start',
            component: Discord,

        },
        {
            path: "/casting",
            name: "casting",
            component: Casting
        },
        {
            path: "/scrims",
            name: "scrims",
            component: Scrims
        },
    ]
})
;