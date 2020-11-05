import Vue from 'vue'
import axios from 'axios'


let axiosInstance = axios.create({
  baseURL : "https://demo.azzule.com/api/servicios.asmx"
})

Vue.prototype.$axios = axiosInstance;