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
        open: open,
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
            message: error
          }))
        }
      )
    },
    onUploadImage: (self, data, history) => {
      console.log(data)
      ApiService.onPost(
        '/api/user/image',
        { data },
        function (response) {
          let responseData = response.data
          
          if (responseData.status != 201) {
            dispatch(updateSnack({
              open: true,
              message: responseData.message
            }))
            console.log('fail')
            self.setState({
              avatar: '',
              avatarFile: '',
              avatarUrl: '',
            })
          }
          else {
            self.setState({
              avatar: responseData.path,
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
            avatarFile: '',
            avatarUrl: '',
          })
          dispatch(updateSnack({
            open: true,
            message: error
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
            open: open,
            message: error
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
