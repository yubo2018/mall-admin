import axios from 'axios' // 引入axios
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到
import _this from '../main'
// 环境的切换
// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = 'https://www.baidu.com'
// }
// else if (process.env.NODE_ENV === 'debug') {
//     axios.defaults.baseURL = 'https://www.ceshi.com'
// }
// else if (process.env.NODE_ENV === 'production') {
//     axios.defaults.baseURL = 'http://127.0.0.1:8007'
// }
axios.defaults.baseURL = 'http://127.0.0.1:8007'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 每次发送请求之前判断是否存在token
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        const token = '123'
        token && (config.headers.token = token)
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status === 200 && response.data.status) {
            return Promise.resolve(response)
        } else {
            console.log(response)
            _this.$Message.error(response.data.message)
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    error => {
        if (error && error.response) {
            switch (error.response.status) {
            case 400:
                error.message = '请求参数错误'
                break
            case 401:
                error.message = '未授权，请登录'
                break
            case 403:
                error.message = '跨域拒绝访问'
                break
            case 404:
                error.message = `请求地址出错: ${error.response.config.url}`
                break
            case 408:
                error.message = '请求超时'
                break
            case 500:
                error.message = '服务器内部错误'
                break
            case 501:
                error.message = '服务未实现'
                break
            case 502:
                error.message = '网关错误'
                break
            case 503:
                error.message = '服务不可用'
                break
            case 504:
                error.message = '网关超时'
                break
            case 505:
                error.message = 'HTTP版本不受支持'
                break
            default:
                break
            }
        }
        _this.$Message.error(error.message)
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
         axios.post(url, QS.stringify(params))
        .then(res => {
            resolve(res.data)
        })
        .catch(err => {
            reject(err.data)
        })
    })
}

// 用户注册
export const reg = (param) => post('/member/register', param)

// 用户登录
export const login = (param) => post('/member/login', param)

// 所有商品
export const goodsAll = (param) => post('/goods/list', param)

// 标签列表
export const tagAll = (param) => post('/tag/list', param)

// 标签编辑
export const tagEdit = (param) => post('/tag/save', param)

// 标签删除
export const tagDel = (param) => post('/tag/del', param)

// 标签删除
export const groupSave = (param) => post('/goods/group/save', param)

