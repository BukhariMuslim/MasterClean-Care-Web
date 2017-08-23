import React from 'react'
import { connect } from 'react-redux'
import {
  loginAuth,
  updateSnack,
  updateLoadingSpin,
  resetLoadingSpin,
} from '../actions/DefaultAction'
import RegisterArt from '../components/RegisterArt'
import {
  withRouter,
} from 'react-router-dom'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    status: state.notif
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateSnack: (open, message) => {
      dispatch(updateSnack({
        open: true,
        message: message
      }))
    },
    onRegister: (self, data, history) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))
      ApiService.onPost(
        '/api/user',
        { data },
        function (response) {
          dispatch(resetLoadingSpin())
          let data = response.data

          if (data.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            self.resetForm()
            history.push('/login')
            dispatch(updateSnack({
              open: true,
              message: 'Mendaftar berhasil! Silahkan login.'
            }))
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
        },
      )
    },
    getUserLogin: (self, history) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))

      // /api/user/me
      ApiService.onGet('/api/user/me',
        '',
        function (response) {
          dispatch(resetLoadingSpin())
          let data = response
          if (data.status === 200) {
            if (data.data) {
              data = data.data
            }
            if (data.status != 403) {
              dispatch(loginAuth(data))
              history.push('/')
            }
            else {
              self.loadInitialData()
            }
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
          self.loadInitialData()
          // dispatch(updateSnack({
          //   open: true,
          //   message: error.name + ": " + error.message.name + ": " + error.message
          // }))
        }
      )
    },
    onUploadImage: (self, data) => {
      let formData = new FormData()
      formData.append('image', data)
      ApiService.onPost(
        '/api/image',
        formData,
        function (response) {
          let responseData = response.data
          
          if (responseData.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: responseData.message
            }))
            self.setState({
              avatar: '',
              avatarUrl: '',
            })
          }
          else {
            self.setState({
              avatar: responseData.image,
              avatarUrl: responseData.links.medium,
            })
            dispatch(updateSnack({
              open: true,
              message: 'Upload Gambar Berhasil'
            }))
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
        }
      )
    },
    onUploadDocumentImage: (self, data) => {
      let formData = new FormData()
      formData.append('image', data)
      ApiService.onPost(
        '/api/image',
        formData,
        function (response) {
          let responseData = response.data
          
          if (responseData.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: responseData.message
            }))
          }
          else {
            let oldDocument = self.state.userDocument
            
            let userDocument = [] 
            if(oldDocument) {
              userDocument = [
                ...oldDocument,
                {
                  'document_path': responseData.image,
                  'remark': '',
                }
              ]
            }
            else {
              userDocument.push({
                'document_path': responseData.image,
                'remark': '',
              })
            }
            self.setState({
              userDocument
            })
            dispatch(updateSnack({
              open: true,
              message: 'Upload Gambar Berhasil'
            }))
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
        }
      )
    },
    getPlace: (self, type) => {
      let dataPlace = [];
      ApiService.onGet(
        '/api/place',
        '',
        function (response) {
          let data = response
          if (data.status !== 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dataPlace = data.data
          }
          self.setState({ [type]: dataPlace })
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState({ [type]: dataPlace })
        }
      )
    },
    getLanguage: (self, type) => {
      let dataLanguage = [];
      ApiService.onGet(
        '/api/language/',
        '',
        function (response) {
          let data = response
          if (data.status !== 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dataLanguage = data.data
          }
          self.setState({ [type]: dataLanguage })
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState({ [type]: dataLanguage })
        }
      )
    },
    getJob: (self, type) => {
      let dataJob = [];
      ApiService.onGet(
        '/api/job/',
        '',
        function (response) {
          let data = response
          if (data.status !== 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dataJob = data.data
          }
          self.setState({ [type]: dataJob })
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState({ [type]: dataJob })
        }
      )
    },
    getWorkTime: (self, type) => {
      let dataWorkTime = [];
      ApiService.onGet(
        '/api/work_time/',
        '',
        function (response) {
          let data = response
          if (data.status !== 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dataWorkTime = data.data
          }
          self.setState({ [type]: dataWorkTime })
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState({ [type]: dataWorkTime })
        }
      )
    },
    getAdditionalInfo: (self, type) => {
      let dataAdditionalInfo = [];
      ApiService.onGet(
        '/api/additional_info/',
        '',
        function (response) {
          let data = response
          if (data.status !== 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dataAdditionalInfo = data.data
          }
          self.setState({ [type]: dataAdditionalInfo })
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState({ [type]: dataAdditionalInfo })
        }
      )
    },
  }
}

const RegisterArtContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(({ history, onUpdateSnack, onRegister, getUserLogin, onUploadImage, onUploadDocumentImage, getPlace, getLanguage, getJob, getWorkTime, getAdditionalInfo, status }) => (
  <div className="container">
    <RegisterArt onRegister={(self, data) => onRegister(self, data, history)}
      onUpdateSnack={onUpdateSnack}
      getUserLogin={(self) => getUserLogin(self, history)}
      onUploadImage={onUploadImage}
      onUploadDocumentImage={onUploadDocumentImage}
      getPlace={getPlace}
      getLanguage={getLanguage}
      getJob={getJob}
      getWorkTime={getWorkTime}
      getAdditionalInfo={getAdditionalInfo}
      status={status} />
  </div>
)))

export default RegisterArtContainer
