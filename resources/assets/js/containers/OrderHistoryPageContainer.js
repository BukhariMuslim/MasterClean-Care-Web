import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, updateLoadingSpin, resetLoadingSpin, fillOrderHistory } from '../actions/DefaultAction'
import OrderHistoryPage from '../components/OrderHistoryPage'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer,
    ordersHistory: state.OrderHistoryReducer,
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
    getUserLogin: (self) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))

      ApiService.onGet('/api/user/me',
        '',
        function (response) {
          dispatch(resetLoadingSpin())
          let data = response
          if (data.status === 200) {
            if (data.data) {
              data = data.data
              self.props.getMyOrderHistory(data.id)
              dispatch(loginAuth(data))
            }
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
        })
    },
    onSubmit: (self, queryString) => {
      dispatch(updateLoadingSpin({
        show: true,
      }))
      
      ApiService.onGet(
        '/api/order/search',
        self.props.user.id + '/' + (queryString || '?') + '&page=1' + '&status=1,2',
        function (response) {
          dispatch(resetLoadingSpin())
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            self.props.history.push('/order/' + queryString)
            dispatch(fillOrderHistory(data.data))
          }
        },
        function (error) {
          dispatch(resetLoadingSpin())
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
        }
      )
    },
    getMyOrderHistory: (id, pageNumb) => {
      ApiService.onGet(
        '/api/order/search',
        id + '/?page=' + (pageNumb || 1) + '&status=1,2',
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillOrderHistory(data.data))
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
          self.props.getJob(self, 'jobItem')
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
          self.props.getWorkTime(self, 'workTimeItem')
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
          self.setParam(self.props.location.search)
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
  }
}

const OrderHistoryPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderHistoryPage))

export default OrderHistoryPageContainer