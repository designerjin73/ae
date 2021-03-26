import Vue from "vue"
import VueRouter from "vue-router";
import Home from "./views/Home";
import aboutus from "./views/aboutus";
import whychooseae from "./views/whychooseae";
import map from "./views/map";
import curriculum1 from "./views/curriculum1";
import community from "./views/Community";
import notice from "./views/notice";
import write from "./views/write";
import login from "./views/login";



Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path:"/", component: Home},
        {path:"/aboutus", component: aboutus},
        {path:"/whychooseae", component: whychooseae},
        {path:"/map", component: map},
        {path:"/curriculum1", component: curriculum1},
        {path:"/community", component: community},
        {path:"/notice", component: notice},
        {path:"/write", component: write},
        {path:"/login", component: login}
    ]

    
});

export default router;
