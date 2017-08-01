import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArt } from '../actions/DefaultAction'
import Art from '../components/Art'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    art: state.ArtReducer
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
        pageNumb ? '?page=' + pageNumb : '',
        function (response) {
          let data = response
          if (data.status != 200) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            dispatch(fillArt(data.data.data))
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
<<<<<<< HEAD
            message: error.name + ": " + error.message
=======
            message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
          }))
        }
      )
    },
  }
}

const ArtContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Art))

export default ArtContainer