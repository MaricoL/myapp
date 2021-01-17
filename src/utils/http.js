import axios from 'axios'
import { Toast } from 'vant'

const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1610713396967321124339713"}'
  }
})

// axois 拦截器
http.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    overlay: true
  })
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(function (response) {
  Toast.clear()
  Toast.success({
    message: '加载成功！',
    duration: 300
  })

  return response
}, function (error) {
  Toast.fail({
    message: '加载失败！',
    forbidClick: true,
    overlay: true,
    duration: 0
  })

  return Promise.reject(error)
})

export default http
