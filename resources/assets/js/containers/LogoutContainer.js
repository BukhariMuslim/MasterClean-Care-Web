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
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    console.log()
    return {
        user: state.UserLoginReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: (history, parent) => {
            dispatch(updateLoadingSpin({
                show: true,
            }))
            
            ApiService.onLogout()
            dispatch(logoutUser())
            dispatch(resetLoadingSpin())
            console.log('logout')
            parent.setState({open:false})
            // axios.post('/api/logout')
            // .then(function (response) {
            //     dispatch(resetLoadingSpin())
            //     let data = response.data
            //     if (data.status === 200) {
            //         dispatch(logoutUser())
            //         self.forceUpdate()
            //     }
            //     else {
            //         dispatch(updateSnack({
            //             open: true,
            //             message: data.message
            //         }))
            //     }
            // })
            // .catch(function (error) {
            //     dispatch(resetLoadingSpin())
            //     dispatch(updateSnack({
            //         open: true,
            //         message: error
            //     }))
            // })
        }
    }
}

const LogoutContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({ history, onLogout, user, parent }) => (
    <Logout onClick={() => onLogout(history, parent)} />
)))

export default LogoutContainer