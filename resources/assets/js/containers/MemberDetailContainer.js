import React from 'react'
import { connect } from 'react-redux'
import { updateSnack } from '../actions/DefaultAction'
import MemberDetail from '../components/MemberDetail'
import {
  withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
  return {
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
    getMember: (id, self) => {
      let member = {}
      ApiService.onGet(
        '/api/user/member',
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
            member = data.data
            const oldMember = self.state.member
            self.setState({ member: Object.assign({}, oldMember, member) })
          }
        },
        function (error) {
          dispatch(updateSnack({
            open: true,
            message: error.name + ": " + error.message
          }))
          this.setState(member)
        }
      )
    },
  }
}

const MemberDetailContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDetail))

export default MemberDetailContainer