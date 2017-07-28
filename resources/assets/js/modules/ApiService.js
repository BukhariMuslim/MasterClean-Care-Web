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

const onLogin = (data, onSuccess, onFail) => {
    return onPost(
        '/api/check_login',
        {
            email: data.email,
            password: data.password,
        },
        function(response) {
            if(response.data.token) {
                const token = response.data.token
                let curDate = new Date()
                curDate.setDate(curDate.getDate(), token.expiree_in)
                document.cookie = 'laravel_token=' + token.access_token +"; expires=; path=/"
            }
            return onSuccess(response.data)
        },
        onFail
    )
}

const onLogout = () => {
    document.cookie = 'laravel_token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const ApiService = {
    onGet, 
    onPost, 
    onPut, 
    onPatch, 
    onDelete,
    onLogin,
    onLogout,
}

export default ApiService