const axios =require('axios');

const service = axios.create({
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 添加请求头等前置处理
    // config.headers['access-token'] = localStorage.getItem('token')
    // console.log('Request Config:', config)
    return config
  },
  (error) => {
    // 请求错误处理
    // console.log('Request Error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 响应后处理
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    // console.log('Response Error:', error)
    return Promise.reject(error)
  }
)

module.exports = { service };