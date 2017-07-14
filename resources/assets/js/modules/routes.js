import React from 'react'
import { Switch, Route, IndexRoute } from 'react-router'
import { simpleAuthentication } from '../containers/LoginContainer'
import App from '../components/App'
import LoginContainer from '../containers/LoginContainer'
import RegisterMemberContainer from '../containers/RegisterMemberContainer'
import RegisterArtContainer from '../containers/RegisterArtContainer'
import UserProfileContainer from '../containers/UserProfileContainer'

const routes = (store) => {
    const requireAuth = (store) => {
        return (nextState, replace) => {
            const state = store.getState()

            console.log(state)

            // if (state) {
            //     replace({
            //         pathname: '/login',
            //         state: { nextPathname: nextState.location.pathname }
            //     })
            // }
        }
    }

    return (
        <Switch>
            <Route exact path="/" component={ App } />
            <Route path="/login" component={ LoginContainer }/>
            <Route path="/register_member" component={ RegisterMemberContainer }/>
            <Route path="/register_art" component={ RegisterArtContainer }/>
            <Route path="/user" component={ UserProfileContainer } onEnter={ requireAuth(store) } />
        </Switch>
    )
}

export default routes