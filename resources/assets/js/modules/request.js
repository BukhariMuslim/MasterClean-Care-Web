import axios from 'axios'

const getCookie = (name) => {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
    return match ? match[1] : null;
}

const client = axios.create()

const request = function(options, onSuccess, onFail) {
  window.axios.defaults.baseURL = window.location.origin
  window.axios.defaults.headers.common['Accept'] = 'application/json'
  window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + getCookie('laravel_token')

  const onDefaultSuccess = (response) => {
    if (onSuccess) {
      onSuccess(response)
    }
    else {
      console.log('Request Successful!', response)
      return response.data
    }
  }

  const onDefaultError = (error) => {
    if (onFail) {
      // console.log(error)
      onFail(error)
    }
    else {
      console.log('Request Failed:', error.config)

      if (error.response) {
        // Request was made but server responded with something
        // other than 2xx
        console.log('Status:',  error.response.status)
        console.log('Data:',    error.response.data)
        console.log('Headers:', error.response.headers)

      } else {
        // Something else happened while setting up the request
        // triggered the error
        console.log('Error Message:', error.message)
      }

      return Promise.reject(error.response || error.message)
    }
  }

  return window.axios(options)
            .then(onDefaultSuccess)
            .catch(onDefaultError)
}

export default request

// export default class ApiService {
//     constructor () {
//         this.axios = axios.create()
//     }

//     login (data, doSuccess, doFail) {
//         this.axios.post('/api/check_login', data)
//         .then(({ data }) => {
//             console.log('almost succes')
//             this.axios.defaults.headers.common['Authorization'] = data.token
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }

//     post (url, data, doSuccess, doFail) {
//         this.axios.post(url, data)
//         .then(({data}) => {
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }

//     get (url, doSuccess, doFail) {
//         this.axios.post(url, data)
//         .then(({data}) => {
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }

//     put (url, data, doSuccess, doFail) {
//         this.axios.post(url, data)
//         .then(({data}) => {
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }

//     patch (url, data, doSuccess, doFail) {
//         this.axios.post(url, data)
//         .then(({data}) => {
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }

//     delete (url, doSuccess, doFail) {
//         this.axios.post(url, data)
//         .then(({data}) => {
//             doSuccess(data)
//         })
//         .catch(doFail(error))
//     }
// }
