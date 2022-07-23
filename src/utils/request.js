import { ElMessage } from 'element-plus'
import axios from 'axios'
// 请求
const http = axios.create({
  baseURL: 'http://' + location.hostname + ':8888',
  timeout: 6000
})
// 请求拦截
http.interceptors.request.use(config => {
  // 请求头设置
  const token = localStorage.getItem('token') || ''
  config.headers.Authorization = token
  return config
}, err => {
  console.log(err)
})
// 响应拦截
http.interceptors.response.use(arr => {
  // 对响应码的处理
  switch (arr.data.meta.status) {
    case 200:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'success'
      })
      break
    case 201:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'success'
      })
      break
    case 204:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'success'
      })
      break
    case 400:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'warning'
      })
      break
    case 401:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'warning'
      })
      break
    case 403:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'warning'
      })
      break
    case 404:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'warning'
      })
      break
    case 422:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'warning'
      })
      break
    case 500:
      ElMessage({
        message: arr.data.meta.msg,
        type: 'error'
      })
      break
  }
  return arr.data.data
}, err => {
  console.log(err)
})
// 返出
export default http

// 添加一个返回过滤器，当捕捉到401错误时，意味着会话已经超时，需要重新登录
// axios.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   console.log(error, 99999999999, error.response);
//   if (error.response.status === 401) {
//     localStorage.removeItem('token');
//     router.push('/login');
//   }
//   return Promise.reject(error);
// });
