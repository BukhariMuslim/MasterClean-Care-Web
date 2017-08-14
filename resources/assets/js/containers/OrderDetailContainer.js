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
  return {
    user: state.UserLoginReducer,
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
            if (!order.review_order) {
              order.review_order = Object.assign({}, order.review_order, self.state.initial_review_order)
            }
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
    submitReview: (self, data) => {
      let order = {}
      ApiService.onPatch(
        '/api/order/full',
        data.order_id,
        { reviewOrder: data },
        function (response) {
          let data = response

          if (data.status != 201 && data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            const order = data.data.data
            self.setState({ order })
            dispatch(updateSnack({
              open: true,
              message: 'Review Berhasil ditambahkan',
            }))
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