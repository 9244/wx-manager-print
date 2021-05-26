import Vue from 'vue'
import App from './App.vue'

// 引入axios
import axios from 'axios'

// 引入elemnet
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)

// 导入router之后需要在构造方法中定义
import router from './router'

Vue.config.productionTip = false

// 封axios
Vue.prototype.$axios = axios;

new Vue({
    // 此处定义声明
    router,
    render: h => h(App),
}).$mount('#app')
