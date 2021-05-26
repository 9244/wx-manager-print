import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Router from 'vue-router'
import Login from '@/components/Login'
// 1. import router  组件
// 2. 开启路由
// 3. app.vue 设置  <router-view/>
Vue.use(Router)

const router = new Router({
    routes:[
        {
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/helloWorld',
            name: 'helloworld',
            component: HelloWorld
        }
    ]
})

export default router