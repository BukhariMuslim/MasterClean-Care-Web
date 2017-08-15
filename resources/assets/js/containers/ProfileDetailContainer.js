import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, resetLoadingSpin, updateLoadingSpin, loginAuth } from '../actions/DefaultAction'
import ProfileDetail from '../components/ProfileDetail'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSnack: (open, message) => {
      dispatch(updateSnack({
        open: true,
        message: message
      }))
    },
    onUpdateProfile: (self, data) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))
      ApiService.onPatch(
        '/api/user',
        data.id,
        { data },
        function (response) {
          dispatch(resetLoadingSpin())
          let data = response.data

          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(loginAuth(data.user))
            self.setState({
              isEdit: false
            })
            dispatch(updateSnack({
              open: true,
              message: 'Update profile berhasil.'
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
    getProfile: (self) => {
      let user = self.state.user
      ApiService.onGet(
        '/api/user/me',
        '',
        function (response) {
          let data = response

          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            user = Object.assign({}, user, data.data)
            self.setState({ user })
            self.loadInitialData()
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          self.setState(user)
        }
      )
    },
    getPlace: (self, type) => {
      let dataPlace = []
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
      let dataLanguage = []
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
      let dataJob = []
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
      let dataWorkTime = []
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
      let dataAdditionalInfo = []
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

const ProfileDetailContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetail))

export default ProfileDetailContainer