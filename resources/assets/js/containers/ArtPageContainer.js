import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArt } from '../actions/DefaultAction'
import ArtPage from '../components/ArtPage'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    arts: state.ArtReducer
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
    getArt: (pageNumb) => {
      ApiService.onGet(
        '/api/user/art',
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
            console.log(data)
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
  }
}

const ArtPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtPage))

export default ArtPageContainer