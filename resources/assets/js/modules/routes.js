import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, IndexRoute } from 'react-router'
import { Redirect, withRouter } from 'react-router-dom'
import { simpleAuthentication } from '../containers/LoginContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterMemberContainer from '../containers/RegisterMemberContainer'
import RegisterArtContainer from '../containers/RegisterArtContainer'
import UserProfileContainer from '../containers/UserProfileContainer'
import Article from '../components/Article'
import DetailArticle from '../components/DetailArticle'
import Admin from '../components/Admin'
import ArticleContainer from '../containers/admin/ArticleContainer'
import NotFound from '../components/NotFound'
import Home from '../components/Home'

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return { }
}

class routesElement extends Component {
    constructor(props) {
        super(props)
    }

    requireAuth (store) {
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

    render() {
        return (
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/login" component={ LoginContainer }/>
                <Route path="/register_member" component={ RegisterMemberContainer }/>
                <Route path="/register_art" component={ RegisterArtContainer }/>
                <Route path="/user" component={ UserProfileContainer } onEnter={ this.requireAuth(this.props.state) } />
                <Route path="/article/new" component={ ArticleContainer }/>
                <Route path="/article" component={ Article }/>
                <Route path="/*" component={ NotFound }/>
            </Switch>
        )
    }
}

const RoutesElement = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(routesElement))

export default RoutesElement