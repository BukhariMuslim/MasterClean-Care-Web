import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, IndexRoute } from 'react-router'
import { Redirect, withRouter } from 'react-router-dom'
import { simpleAuthentication } from '../containers/LoginContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterMemberContainer from '../containers/RegisterMemberContainer'
import RegisterArtContainer from '../containers/RegisterArtContainer'
import ProfilePage from '../components/ProfilePage'
import ArticlePage from '../components/ArticlePage'
import ArtPageContainer from '../containers/ArtPageContainer'
import OfferPage from '../components/OfferPage'
import NotFound from '../components/NotFound'
import HomeContainer from '../containers/HomeContainer'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class routesElement extends Component {
  constructor(props) {
    super(props)
  }

  requireAuth(store) {
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
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/register_member" component={RegisterMemberContainer} />
        <Route path="/register_art" component={RegisterArtContainer} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/art/:artId" component={ArtPageContainer} />
        <Route path="/art" component={ArtPageContainer} />
        <Route path="/offer/:offerId" component={OfferPage} />
        <Route path="/offer" component={OfferPage} />
        <Route path="/*" component={NotFound} />
      </Switch>
    )
  }
}

const RoutesElement = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(routesElement))

export default RoutesElement