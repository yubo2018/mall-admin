import axios from 'axios'
import qs from 'qs'
import _this from '../main'
import common from './common'
let apiUrl = "http://127.0.0.1:8007"

let methodToken = ['/member/login']


// 接口token验证
const post = (method, data, callback) => {
    // 如果是需要登陆的，增加token
    // if (!methodToken.includes(method)) {
    //     let userToken = common.getStorage('user_token')
    //     if (!userToken) {
    //         common.jumpToLogin()
    //         return false
    //     } else {
    //         data.token = userToken
    //     }
    // }
    sendPost(apiUrl + method, qs.stringify(data), {}, callback)
}

// axios 发送请求统一处理
const sendPost = (url, data, config = {}, callback) => {
    if (Object.keys(config).length) {
        // _this.$dialog.loading.open('上传中...')
    }
    axios.post(url, data, config).then(response => {
        console.log(response.data)
        if (response.data.code == 0) {
            // return _this.$Message.error(response.data.message);
        }
        callback(response.data)
    }).catch(err => {
        if (err && err.response) {
            switch (err.response.status) {
            case 400:
                err.message = '请求参数错误'
                break
            case 401:
                err.message = '未授权，请登录'
                break
            case 403:
                err.message = '跨域拒绝访问'
                break
            case 404:
                err.message = `请求地址出错: ${err.response.config.url}`
                break
            case 408:
                err.message = '请求超时'
                break
            case 500:
                err.message = '服务器内部错误'
                break
            case 501:
                err.message = '服务未实现'
                break
            case 502:
                err.message = '网关错误'
                break
            case 503:
                err.message = '服务不可用'
                break
            case 504:
                err.message = '网关超时'
                break
            case 505:
                err.message = 'HTTP版本不受支持'
                break
            default:
                break
            }
            // _this.$dialog.loading.close()
        }
    })
}

// 用户注册
export const reg = (data, callback) => post('/member/register', data, callback)

// 用户登录
export const login = (data, callback) => post('/member/login', data, callback)

// 所有商品
export const goodsAll = (data, callback) => post('/goods/list', data, callback)

// 标签列表
export const tagAll = (data, callback) => post('/tag/list', data, callback)

// 标签编辑
export const tagEdit = (data, callback) => post('/tag/save', data, callback)

// 标签删除
export const tagDel = (data, callback) => post('/tag/del', data, callback)
