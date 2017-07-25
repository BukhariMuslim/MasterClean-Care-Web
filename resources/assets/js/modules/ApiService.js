    import request from './request'

const onGet = (url, id = '', onSuccess = {}, onFail = {}) => {
    if (id) {
        url = `${url}/${id}`
    }

    return request({
        url,
        method: 'get'
    }, onSuccess, onFail)
}

const onDelete = (url, id = '', onSuccess = {}, onFail = {}) => {
    return request({
        url : `${url}/${id}`,
        method: 'delete'
    }, onSuccess, onFail)
}

const onPost = (url, data, onSuccess = {}, onFail = {}) => {
    return request({
        url,
        method: 'post',
        data,
    }, onSuccess, onFail)
}


const onPut = (url, id, data, onSuccess = {}, onFail = {}) => {
    return request({
        url: `${url}/${id}`,
        method: 'put',
        data,
    }, onSuccess, onFail)
}

const onPatch = (url, id, data, onSuccess = {}, onFail = {}) => {
    return request({
        url: `${url}/${id}`,
        method: 'patch',
        data,
    }, onSuccess, onFail)
}

const ApiService = {
    onGet, 
    onPost, 
    onPut, 
    onPatch, 
    onDelete,
}

export default ApiService