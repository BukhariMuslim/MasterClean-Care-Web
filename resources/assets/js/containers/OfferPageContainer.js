import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOffer } from '../actions/DefaultAction'
import OfferPage from '../components/OfferPage'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    offers: state.OfferReducer
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
  }
}

const OfferPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferPage))

export default OfferPageContainer