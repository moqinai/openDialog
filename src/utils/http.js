/*
 * @Author: lipengcheng
 * @Date: 2023-07-24 10:39:43
 * @LastEditTime: 2023-07-25 18:02:44
 * @Description: 
 */

import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // const headers = config.headers as AxiosRequestHeaders
    // const token = $util.storage('local', 'get', `${import.meta.env.VITE_PROJECT_PREFIX}_TOKEN`) || 'Basic YWRtaW46em9uc3Q='
    // if (token) headers.Authorization = token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  },
)

const $http = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const headers = {}
    const dataOptions = {}
    if (method === 'get') {
      dataOptions.params = data
    } else {
      dataOptions.data = data
    }
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX25hbWUiOiLmtYvor5XnrqHnkIblkZhhZG1pbiIsImdyb3VwX2lkIjo3LCJpc19zdXBlcnVzZXIiOmZhbHNlLCJleHAiOjE2OTA2ODMxMzh9.pFAMq5t6sXNgkJcZDBZgAhB17i1P-iP2V6kSBGkI75U' // localStorage.getItem('ZLINK_TOKEN_NAME')
    headers['X-Xq5-Jwt'] = token ?? ''
    axios({
      url,
      method,
      timeout: 10000,
      headers,
      ...dataOptions,
    }).then(async (res) => {
      console.log(res)
    })
  })
}

export { $http }
