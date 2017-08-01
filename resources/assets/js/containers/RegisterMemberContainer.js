import React from 'react'
import { connect } from 'react-redux'
import { filterTodo, updateSnack } from '../actions/DefaultAction'
import RegisterMember from '../components/RegisterMember'
import {
  withRouter,
} from 'react-router-dom'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
    status: state.notif
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateSnack: (open, message) => {
      dispatch(updateSnack({
<<<<<<< HEAD
        open: true,
=======
        open: open,
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        message: message
      }))
    },
    onRegister: (self, data, history) => {
      ApiService.onPost(
        '/api/user',
        { data },
        function (response) {
          let data = response.data

          if (data.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: data.message
            }))
          }
          else {
            self.resetForm()
            dispatch(updateSnack({
              open: true,
              message: 'Mendaftar berhasil! Silahkan login.'
            }))
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
    onUploadImage: (self, data, history) => {
<<<<<<< HEAD
      let formData = new FormData()
      formData.append('image', data)
      ApiService.onPost(
        '/api/image',
        formData,
=======
      console.log(data)
      ApiService.onPost(
        '/api/user/image',
        { data },
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
        function (response) {
          let responseData = response.data
          
          if (responseData.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: responseData.message
            }))
<<<<<<< HEAD
            self.setState({
              avatar: '',
=======
            console.log('fail')
            self.setState({
              avatar: '',
              avatarFile: '',
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
              avatarUrl: '',
            })
          }
          else {
            self.setState({
<<<<<<< HEAD
              avatar: responseData.image,
              avatarUrl: responseData.links.medium,
=======
              avatar: responseData.path,
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
            })
            dispatch(updateSnack({
              open: true,
              message: 'Upload Gambar Berhasil'
            }))
          }
        },
        function (error) {
          self.setState({
            avatar: '',
<<<<<<< HEAD
=======
            avatarFile: '',
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
            avatarUrl: '',
          })
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
        },
        function (error) {
          dispatch(updateSnack({
<<<<<<< HEAD
            open: true,
            message: error.name + ": " + error.message
=======
            open: open,
            message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
          }))
          self.setState({ [type]: dataPlace })
        }
      )
    },
  }
}

const RegisterMemberContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(({ history, onUpdateSnack, onRegister, onUploadImage, getPlace, status }) => (
  <div className="container">
    <RegisterMember onRegister={(self, data) => onRegister(self, data, history)}
      getPlace={getPlace}
      onUpdateSnack={onUpdateSnack}
      onUploadImage={(self, data) => onUploadImage(self, data, history)}
      status={status} />
  </div>
)))

export default RegisterMemberContainer
