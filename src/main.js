import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//import moment from 'moment'

import EmployeeList from "./views/employee/EmployeeList.vue"

Vue.config.productionTip = false

//1 Định nghĩa các path
const routes = [
  { path: '/employee', component: EmployeeList }
]
//2 Khởi tạo routh
const router = new VueRouter({
  routes // short for `routes: routes`
})

//3 Khai báo sử dụng vue router:
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
