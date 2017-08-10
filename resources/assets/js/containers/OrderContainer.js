import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOrder } from '../actions/DefaultAction'
import Order from '../components/Order'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
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
  }
}

const OrderContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Order))

export default OrderContainer