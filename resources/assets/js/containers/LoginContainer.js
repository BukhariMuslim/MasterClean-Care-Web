import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom'
import {
  loginAuth,
  updateSnack,
  updateLoadingSpin,
  resetLoadingSpin,
} from '../actions/DefaultAction'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    status: state.notif
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSnack: (open, message) => {
      dispatch(updateSnack({
<<<<<<< HEAD
        open: true,
=======
        open: open,
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        message: message
      }))
    },
    onLogin: (data, history) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))

      ApiService.onLogin(
        {
          email: data.email,
          password: data.password,
        },
        function (data) {
          dispatch(resetLoadingSpin())
          if (data.user) {
            dispatch(loginAuth(data.user))
            history.push('/')
          }
          else {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
<<<<<<< HEAD
          // dispatch(updateSnack({
          //   open: true,
          //   message: error.name + ": " + error.message
          // }))
=======
          dispatch(updateSnack({
            open: open,
            message: error
          }))
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        }
      )
    },
    getUserLogin: (history) => {
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
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
<<<<<<< HEAD
          // dispatch(updateSnack({
          //   open: true,
          //   message: error.name + ": " + error.message.name + ": " + error.message
          // }))
=======
          dispatch(updateSnack({
            open: open,
            message: error
          }))
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        })
    }
  }
}

const LoginContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(({ history, onUpdateSnack, onLogin, status, getUserLogin }) => (
  <div className="container">
    <Login onLogin={(data) => onLogin(data, history)}
      onUpdateSnack={onUpdateSnack}
      status={status}
      getUserLogin={() => getUserLogin(history)} />
  </div>
)))

export default LoginContainer