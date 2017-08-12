import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, updateLoadingSpin, resetLoadingSpin, fillArt, fillOffer, fillMyOffer, fillOrder } from '../actions/DefaultAction'
import Home from '../components/Home'
import {
  withRouter,
} from 'react-router-dom'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer,
    arts: state.ArtReducer,
    orders: state.OrderReducer,
    offers: state.OfferReducer,
    myOffers: state.MyOfferReducer,
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
            }
            if (data.status != 403) {
              self.props.getMyOffer(data.id)
              self.props.getMyOrder(data.id)
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
    },
    getArt: () => {
      ApiService.onGet(
        '/api/user/art',
        '?page=1' ,
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillArt(data.data))
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
    getMyOffer: (id, pageNumb) => {
      ApiService.onGet(
        '/api/offer/full/user',
        id + '/?page=' + (pageNumb || 1) ,
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillMyOffer(data.data))
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
    getOffer: (pageNumb) => {
      ApiService.onGet(
        '/api/offer/full',
        '?page=' + (pageNumb || 1) ,
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillOffer(data.data))
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
    getMyOrder: (id, pageNumb) => {
      ApiService.onGet(
        '/api/order/full/user',
        id + '/?page=' + (pageNumb || 1) ,
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillOrder(data.data))
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
  }
}

const HomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home))

export default HomeContainer