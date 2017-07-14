import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import {
    Route, 
    Redirect,
    withRouter,
} from 'react-router-dom'
import {
    loginAuth,
    updateSnack,
    updateLoadingSpin,
    resetLoadingSpin,
} from '../actions/DefaultAction'
import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        status: state.notif
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateSnack: (open, message) => {
            dispatch(updateSnack({
                open: open,
                message: message
            }))
        },
        onLogin: (data, history) => {
            dispatch(updateLoadingSpin({
                show: true,
            }))
            
            axios.post('/api/check_login', {
                email: data.email,
                password: data.password
            })
            .then(function (response) {
                dispatch(resetLoadingSpin())
                let data = response.data
                if (data.status === 200) {
                    dispatch(loginAuth(data.user))
                    history.push('/')
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
                    open: open,
                    message: error
                }))
            })
        }
    }
}

const LoginContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({ history, onUpdateSnack, onLogin, status }) => (
    <div className="container">
        <Login onLogin={ (data) => onLogin(data, history) }
            onUpdateSnack={onUpdateSnack}
            status={ status } />
    </div>
)))

export default LoginContainer