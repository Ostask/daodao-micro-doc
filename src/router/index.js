import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:() => import("../pages/start.vue")
    },
    {
        path:"/login",
        name:"Login",
        component:() => import("../pages/login.vue"),
        meta:{
            fullscreen:true
        }
    }
]

const router = new VueRouter({
    routes
})

router.afterEach(() => {
    const el = document.getElementById('frame-wrapper')
    if(el){
        el.scrollTop = 0
    }
})

export default router