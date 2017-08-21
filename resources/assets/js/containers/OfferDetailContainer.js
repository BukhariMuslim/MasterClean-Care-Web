import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOffer } from '../actions/DefaultAction'
import OfferDetail from '../components/OfferDetail'
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
    getOffer: (id, self) => {
      let offer = {}
      ApiService.onGet(
        '/api/offer/full',
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
            offer = data.data
            self.setState({ offer })
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          this.setState(offer)
        }
      )
    },
    submitAccept: (self, data) => {
      let offer = self.state.offer
      ApiService.onPatch(
        '/api/offer/offer_art',
        data.id,
        data,
        function (response) {
          let data = response

          if (data.status != 201 && data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            if (data.data.status != 201 && data.data.status != 200) {
              dispatch(updateSnack({
                open: true,
                message: data.data.message
              }))
            }
            else {
              offer = data.data.data
              self.setState({
                offer
              })
              dispatch(updateSnack({
                open: true,
                message: 'Art Berhasil diterima',
              }))
            }
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          this.setState(offer)
        }
      )
    },
  }
}

const OfferDetailContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferDetail))

export default OfferDetailContainer