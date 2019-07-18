import { POST, GET } from './request'
import fileSliceUpload from './formData'
// 用户注册
export const reg = (param) => POST('/member/register', param)

// 用户登录
export const login = (param) => POST('/member/login', param)

// 所有商品
export const goodsAll = (param) => GET('/goods/list', param)

// 增加标签
export const addTag = (param) => POST('/goods/tag/add', param)

// 标签删除
export const delTag = (param) => POST('/goods/tag/del', param)

// 标签列表
export const tagList = (param) => GET('/goods/tag/list', param)

// 标签修改
export const updateTag = (param) => POST('/goods/tag/update', param)

// 文件分片上传
export const upload = (file, handleXhrProgressCallback, handleXhrSuccessCallback, handleXhrErrorCallback) => fileSliceUpload(file, handleXhrProgressCallback, handleXhrSuccessCallback, handleXhrErrorCallback)
