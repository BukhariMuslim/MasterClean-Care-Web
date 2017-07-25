import axios from 'axios'

const client = axios.create()

let token = document.head.querySelector('meta[name="_csrf"]');

const request = function(options, onSuccess, onFail) {
  client.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  client.defaults.headers.common['X-CSRF-TOKEN'] = token.content; 

  const onDefaultSuccess = onSuccess ? onSuccess
    : function (response) {
      console.debug('Request Successful!', response);
      return response.data;
    }

  const onDefaultError = onFail ? onFail
    : function(error) {
    console.error('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      console.error('Status:',  error.response.status);
      console.error('Data:',    error.response.data);
      console.error('Headers:', error.response.headers);

    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
            .then(onDefaultSuccess)
            .catch(onDefaultError);
}

export default request;

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
