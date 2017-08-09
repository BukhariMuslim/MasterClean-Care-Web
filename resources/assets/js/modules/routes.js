import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, IndexRoute } from 'react-router'
import { Redirect, withRouter } from 'react-router-dom'
import { simpleAuthentication } from '../containers/LoginContainer'
import LoginContainer from '../containers/LoginContainer'
import RegisterMemberContainer from '../containers/RegisterMemberContainer'
import RegisterArtContainer from '../containers/RegisterArtContainer'
import MemberDetailContainer from '../containers/MemberDetailContainer'
import ProfilePage from '../components/ProfilePage'
import ArtPageContainer from '../containers/ArtPageContainer'
import OfferPageContainer from '../containers/OfferPageContainer'
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
        <Route path="/member/:memberId" component={MemberDetailContainer} />
        <Route path="/art/:artId" component={ArtPageContainer} />
        <Route path="/art" component={ArtPageContainer} />
        <Route path="/offer/:offerId" component={OfferPageContainer} />
        <Route path="/offer" component={OfferPageContainer} />
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