import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import wsLogin from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: '/',
        // name: 'Home',
        component: function() {
            return import ('../components/Home.vue')
        }
    },
    {
        path: '/Test',
        // name: 'Home',
        component: function() {
            return import ('../components/Test.vue')
        },
        meta: { requireAuth: true }
    },
    {
        path: '/Home',
        name: 'Home',
        component: function() {
            return import ('../components/Home.vue')
        }
    },
    {
        path: '/register',
        name: 'register',
        component: function() {
            return import ('../components/register.vue')
        },
        meta: { requireAuth: true }
    }, {
        path: '/login',
        name: 'login',
        component: function() {
            return import ('../components/login.vue')
        }
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (JSON.parse(localStorage.getItem('islogin'))) { //判断本地是否存在access_token
            next();
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next();
    }
    /*如果本地 存在 token 则 不允许直接跳转到 登录页面*/
    if (to.fullPath == "/login") {
        if (JSON.parse(localStorage.getItem('islogin'))) {
            next({
                path: from.fullPath
            });
        } else {
            next();
        }
    }
});

export default router