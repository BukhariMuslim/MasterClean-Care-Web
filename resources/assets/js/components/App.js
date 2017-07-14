import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import SearchBarContainer from '../containers/SearchBarContainer'
import { simpleAuthentication } from '../containers/LoginContainer'
import NotificationContainer from '../containers/NotificationContainer'
import AppDrawerContainer from '../containers/AppDrawerContainer'
import LoadingSpinContainer from '../containers/LoadingSpinContainer'
import history from '../modules/history'

const App = () => {
    return (
        <div>
            <AppDrawerContainer />
            <NotificationContainer />
            <LoadingSpinContainer />
        </div>
    )
}

export default App