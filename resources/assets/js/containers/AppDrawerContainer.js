import React from 'react'
import { connect } from 'react-redux'
import AppDrawer from '../components/AppDrawer'
import history from '../modules/history'
import {
    loginAuth,
    updateSnack,
    updateLoadingSpin,
    resetLoadingSpin,
} from '../actions/DefaultAction'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    return {
        user: state.UserLoginReducer.user,
        history,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getUserLogin: () => {
            dispatch(updateLoadingSpin({
                show: true,
            }))
            
            // /api/user/me
            ApiService.onGet('/api/user/me', 
            '',
            function (response) {
                dispatch(resetLoadingSpin())
<<<<<<< HEAD
                console.log(response)
=======
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                let data = response
                if (data.status === 200) {
                    if (data.data) {
                        data = data.data
                    }
                    if (data.status != 403) {
                        dispatch(loginAuth(data))
                    }
                }
            },
            function (error) {
                dispatch(resetLoadingSpin())
                dispatch(updateSnack({
<<<<<<< HEAD
                    open: true,
                    message: error.name + ": " + error.message.name + ": " + error.message
=======
                    open: open,
                    message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                }))
            })
        }
    }
}

const AppDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer)

export default AppDrawerContainer