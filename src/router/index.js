//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
//映入路有组件
import MyHome from '@/pages/MyHome'
import MyLogin from '@/pages/MyLogin'
import MyRegister from '@/pages/MyRegister'
import MySearch from '@/pages/MySearch'

//配置路由
export default new VueRouter({
    //配置路由
    routes: [
        {
            path: '/myhome',
            component: MyHome,
            meta: { show: true }
        },
        {
            path: '/mylogin',
            component: MyLogin,
            meta: { show: false }

        },
        {
            path: '/myregister',
            component: MyRegister,
            meta: { show: false }

        },
        {
            path: '/mysearch/:keyword?',
            component: MySearch,
            meta: { show: true },
            name: 'mysearch'
        },
        {
            path: '*',
            redirect: "/myhome",

        }
    ]
})
