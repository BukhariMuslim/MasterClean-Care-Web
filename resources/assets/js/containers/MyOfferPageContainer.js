import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, updateLoadingSpin, resetLoadingSpin, fillOffer } from '../actions/DefaultAction'
import MyOfferPage from '../components/MyOfferPage'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    user: state.UserLoginReducer,
    offers: state.MyOfferReducer
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
              self.props.getMyOffer(data.id)
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
        '/api/offer/search',
        self.props.user.id + '/' + queryString,
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
            self.props.history.push('/offer/my_offer/' + queryString)
            dispatch(fillOffer(data.data))
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
    getMyOffer: (id, pageNumb) => {
      console.log('im on it')
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

const MyOfferPageContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyOfferPage))

export default MyOfferPageContainer