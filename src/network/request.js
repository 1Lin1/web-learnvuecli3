import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  console.log(process.env.NODE_ENV);
  console.log(process.env.VUE_APP_TITLE);
  
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  })
  
  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    console.log(config.headers);
    //为请求头添加一些东西
    
    config.headers.userId ='1111';
    config.headers.token = 'aaaa';
    
    
    return config
  }, err => {
    // console.log(err);
  })
  
  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  
  // 3.发送真正的网络请求 本质上axios是返回一个promise
  return instance(config)
}
