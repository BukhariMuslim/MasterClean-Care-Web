import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOrder } from '../actions/DefaultAction'
import OrderDetail from '../components/OrderDetail'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateSnack: (open, message) => {
      dispatch(updateSnack({
        open: true,
        message: message
      }))
    },
    getOrder: (id, self) => {
      let order = {}
      ApiService.onGet(
        '/api/order/full',
        id,
        function (response) {
          let data = response

          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            order = data.data
            self.setState({ order })
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          this.setState(order)
        }
      )
    },
  }
}

const OrderDetailContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail))

export default OrderDetailContainer