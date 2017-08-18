import axios from 'axios'
import Vue from 'vue'

const VueAxios = {
  install (v, options) {
    const axiosInstance = axios.create(options)
    v.axios = axiosInstance
    v.prototype.axios = axiosInstance
  }
}

Vue.use(VueAxios, {
  baseURL: 'http://jsonplaceholder.typicode.com'
})
