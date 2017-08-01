import React from 'react'
import { connect } from 'react-redux'
// import UserProfile from '../components/UserProfile'
import {
    Route, 
    Redirect,
    withRouter
} from 'react-router-dom'
import {
    updateSnack
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
<<<<<<< HEAD
                open: true,
=======
                open: open,
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                message: message
            }))
        },
        onLogin: (data, history) => {
            axios.post('/api/check_login', {
                email: data.email,
                password: data.password
            })
            .then(function (response) {
                let data = response.data
                if (data.status === 200) {
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
                dispatch(updateSnack({
<<<<<<< HEAD
                    open: true,
                    message: error.name + ": " + error.message
=======
                    open: open,
                    message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                }))
            });
            
        }
    }
}

const UserProfileContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({ history, onUpdateSnack, onLogin, status }) => (
     <Route render={props => (
        simpleAuthentication.isAuthenticated() ? (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>
        ) : (
            <div className="container">
                <Login onLogin={(data) => onLogin(data, history)}
                    onUpdateSnack={onUpdateSnack}
                    status={status} />
            </div>
        )
    )}/>
)))

export default UserProfileContainer