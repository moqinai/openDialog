/*
 * @Author: lipengcheng
 * @Date: 2023-07-24 10:39:43
 * @LastEditTime: 2023-07-27 18:10:27
 * @Description: http封装
 */

import axios from 'axios'

const Toast = (msg, duration) => {
  duration = isNaN(duration) ? 3000 : duration;
  var m = document.createElement('div');
  m.innerHTML = msg;
  m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 9999999999;background: rgba(0, 0, 0,.7);font-size: 12px;";
  document.body.appendChild(m);
  setTimeout(function() {
    var d = 0.5;
    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
    m.style.opacity = '0';
    setTimeout(function() { document.body.removeChild(m) }, d * 1000);
  }, duration);
}



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
    
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    console.log(headers)
    xhr.setRequestHeader('X-Xq5-Jwt', token)
    xhr.send();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
          Toast('请求错误!', 2000);
        }
      }
    }
    /* axios({
      url,
      method,
      timeout: 10000,
      headers,
      ...dataOptions,
    }).then(async (res) => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res)
          Toast('请求错误!', 2000);
        }
      } else {
        reject(res)
        Toast('请求错误!', 2000);
      }
    }) */
  })
}

export { $http }
