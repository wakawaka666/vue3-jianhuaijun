import axios from 'axios'


// 定义BASEURL 从vue.config.js把devAPI（判断环境如果不是production那就使用devApi）传给baseURL
const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API;

const service = axios.create({
    baseURL: BASEURL,
    timeout: 15000
});

// 请求接口前 做一些数据处理 (请求拦截器)
service.interceptors.request.use(function (config) {
    //最终目的是在请求头添加参数
    // config.headers['X-SS-API-KEY'] = 'e0ffcdcf-7b03-43a1-a834-9321b461dd72'

    return config;
}, function (error) {
    return Promise.reject(error);
});

// 请求接口后 返回数据进行拦截 (响应拦截器)
service.interceptors.response.use(function (response) {
    let data = response.data
    return data;
}, function (error) {
    return Promise.reject(error);
});



export default service