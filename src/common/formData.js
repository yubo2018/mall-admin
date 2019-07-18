import axios from 'axios' // 引入axios

/**
 * @name fileSliceUpload
 * @description 文件分片上传操作
 * @param file 文件File
 * @param handleXhrProgressCallback // progress事件回调
 * @param handleXhrSuccessCallback // 请求成功事件回调
 * @param handleXhrErrorCallback // 请求失败事件
 */

// 文件分片上传
// POST('/goods/tag/update', param)
export const fileSliceUpload = (file, handleXhrProgressCallback, handleXhrSuccessCallback, handleXhrErrorCallback) => {
    axios.defaults.baseURL = 'http://127.0.0.1:8007'
    axios.defaults.timeout = 10000000
    const eachSize = 2 * 1024 * 1024 // 每个chunks的大小
    const blockCount = Math.ceil(file.size / eachSize) // 分片总数
    const axiosArray = [] // axiosPromise数组
    let ext = file.name.split('.')
    ext = ext[ext.length - 1] // 获取文件后缀名
    // 通过hash标识文件
    let random = Math.random().toString()
    random = random.split('.')
    random = random[random.length - 1]
    let hash = Date.now() + random + file.lastModified // 文件 hash 实际应用时，hash需要更加复杂，确保唯一性，可以使用uuid
    // 处理每个分片的上传操作
    for (let i = 0; i < blockCount; i++) {
        let start = i * eachSize
        let end = Math.min(file.size, start + eachSize)
        // 构建表单
        const form = new FormData()
        form.append('file', file.slice(start, end))
        form.append('name', file.name)
        form.append('total', blockCount)
        form.append('ext', ext)
        form.append('index', i)
        form.append('size', file.size)
        form.append('hash', hash)

        // ajax提交 分片，此时 content-type 为 multipart/form-data
        const axiosOptions = {
            onUploadProgress: (e) => {
                console.log(`当前上传第 ${i + 1} 个chunk，共计 ${blockCount}`)
                // handleXhrProgressCallback instanceof Function ? handleXhrProgressCallback(blockCount, i, e) : ''
            }
        }
        axiosArray.push(axios.post('/upload/upload_chunks', form, axiosOptions))
    }
    // 所有分片上传后，请求合并分片文件
    axios.all(axiosArray).then(() => {
        // 合并chunks
        const data = {
            name: file.name,
            total: blockCount,
            ext,
            hash
        }
        // 请求分片合并
        axios.post('/upload/merge_chunks', data).then((res) => {
            // handleXhrSuccessCallback instanceof Function ? handleXhrSuccessCallback(res.data) : ''
        }).catch((err) => {
            console.log(err)
            // handleXhrErrorCallback instanceof Function ? handleXhrErrorCallback(err) : ''
        })
    })
}

export default fileSliceUpload
