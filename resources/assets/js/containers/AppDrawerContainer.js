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
import axios from 'axios'

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
            
            axios.get('/api/user/me_web')
            .then(function (response) {
                dispatch(resetLoadingSpin())
                let data = response.data
                if (data.status === 200) {
                    dispatch(loginAuth(data.user))
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

const AppDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer)

export default AppDrawerContainer