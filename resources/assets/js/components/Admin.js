import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import SearchBarContainer from '../containers/SearchBarContainer'
import { simpleAuthentication } from '../containers/LoginContainer'
import NotificationContainer from '../containers/NotificationContainer'
import AppDrawerContainer from '../containers/AppDrawerContainer'
import LoadingSpinContainer from '../containers/LoadingSpinContainer'
import AdminMenuCollection from '../modules/AdminMenuCollection'

const Admin = (props) => {
    return (
        <div>
            <AppDrawerContainer MenuCollection={ AdminMenuCollection } />
            <NotificationContainer />
            <LoadingSpinContainer />
            <div className="container" style={{ paddingTop: "75px" }}>
                { props.children }
            </div>
        </div>
    )
}

export default Admin