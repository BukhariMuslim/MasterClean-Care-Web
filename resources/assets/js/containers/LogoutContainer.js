import React from 'react'
import { connect } from 'react-redux'
import Logout from '../components/Logout'
import {
  Route,
  Redirect,
  withRouter,
  Link
} from 'react-router-dom'
import {
  logoutUser,
  updateLoadingSpin,
  resetLoadingSpin,
  updateSnack,
} from '../actions/DefaultAction'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: (history, parent) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))

      ApiService.onLogout()
      dispatch(logoutUser())
      dispatch(resetLoadingSpin())
      history.push('/')
      parent.setState({ open: false })
      dispatch(updateSnack({
        open: true,
        message: 'Logout Berhasil'
      }))
    }
  }
}

const LogoutContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(({ history, onLogout, user, parent }) => (
  <Logout onClick={() => onLogout(history, parent)} />
)))

export default LogoutContainer