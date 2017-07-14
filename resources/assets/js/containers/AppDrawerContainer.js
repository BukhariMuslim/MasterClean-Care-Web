import React from 'react'
import { connect } from 'react-redux'
import AppDrawer from '../components/AppDrawer'
import history from '../modules/history'

const mapStateToProps = (state) => {
    return {
        user: state.UserLoginReducer.user,
        history,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

const AppDrawerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppDrawer)

export default AppDrawerContainer