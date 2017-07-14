import React from 'react'
import { connect } from 'react-redux'
import Logout from '../components/Logout'
import {
    Route, 
    Redirect,
    withRouter,
    Link
} from 'react-router-dom'
import {
    logoutUser,
    updateLoadingSpin,
    resetLoadingSpin,
    updateSnack,
} from '../actions/DefaultAction'
import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        user: state.UserLoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: (history, self) => {
            dispatch(updateLoadingSpin({
                show: true,
            }))
            
            axios.post('/api/logout')
            .then(function (response) {
                dispatch(resetLoadingSpin())
                let data = response.data
                if (data.status === 200) {
                    dispatch(logoutUser())
                    self.forceUpdate()
                }
                else {
                    dispatch(updateSnack({
                        open: true,
                        message: data.message
                    }))
                }
            })
            .catch(function (error) {
                dispatch(resetLoadingSpin())
                dispatch(updateSnack({
                    open: true,
                    message: error
                }))
            })
        }
    }
}

const LogoutContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({ history, onLogout, user }) => (
    <Logout onClick={(self) => onLogout(history, self)} />
)))

export default LogoutContainer