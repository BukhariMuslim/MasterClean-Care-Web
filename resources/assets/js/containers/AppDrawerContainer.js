import React from 'react'
import { connect } from 'react-redux'
import AppDrawer from '../components/AppDrawer'
import history from '../modules/history'
import {
  loginAuth,
  updateSnack,
  updateLoadingSpin,
  resetLoadingSpin,
} from '../actions/DefaultAction'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer.user,
    history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserLogin: () => {
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
            }
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
          // dispatch(updateSnack({
          //     open: true,
          //     message: error.name + ": " + error.message.name + ": " + error.message
          // }))
        })
    }
  }
}

const AppDrawerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDrawer)

export default AppDrawerContainer