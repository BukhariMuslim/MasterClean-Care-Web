import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArt } from '../actions/DefaultAction'
import Footer from '../components/Footer'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer.user,
    history,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const FooterContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer))

export default FooterContainer