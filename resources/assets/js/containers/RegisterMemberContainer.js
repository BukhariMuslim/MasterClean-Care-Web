import React from 'react'
import { connect } from 'react-redux'
import { 
  loginAuth,
  updateSnack,
  updateLoadingSpin,
  resetLoadingSpin,
} from '../actions/DefaultAction'
import RegisterMember from '../components/RegisterMember'
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
      ApiService.onPost(
        '/api/user',
        { data },
        function (response) {
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
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
        }
      )
    },
    onUploadImage: (self, data, history) => {
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
          self.setState({
            avatar: '',
            message: error.name + ": " + error.message
          })
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
  }
}

const RegisterMemberContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(({ history, onUpdateSnack, onRegister, onUploadImage, getUserLogin, getPlace, status }) => (
  <div className="container">
    <RegisterMember onRegister={(self, data) => onRegister(self, data, history)}
      getPlace={getPlace}
      onUpdateSnack={onUpdateSnack}
      onUploadImage={(self, data) => onUploadImage(self, data, history)}
      getUserLogin={(self) => getUserLogin(self, history)}
      status={status} />
  </div>
)))

export default RegisterMemberContainer
