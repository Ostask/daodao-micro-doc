import router from '@/router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken} from '@/utils/auth' // getToken from cookie

/**
 * 路由拦截判断token及权限
 */
const routeWhiteList = ['login']// no redirect whitelist

router.beforeEach((to, from, next) => {
    NProgress.start()
    //next()
    if (getToken()) {
        next()
    }else{
        if (to.path.indexOf(routeWhiteList) > -1) {
            next()
        }else{
            next('/login') // 否则全部重定向到登录页
            NProgress.done()
        }
    }
})

router.afterEach((to, from) => {
    NProgress.done()
})