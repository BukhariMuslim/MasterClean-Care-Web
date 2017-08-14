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
import Term from '../components/Term'
import TermMobile from '../components/TermMobile'
import ArtPageContainer from '../containers/ArtPageContainer'
import MyOfferPageContainer from '../containers/MyOfferPageContainer'
import OfferPageContainer from '../containers/OfferPageContainer'
import OrderHistoryPageContainer from '../containers/OrderHistoryPageContainer'
import OrderPageContainer from '../containers/OrderPageContainer'
import NotFound from '../components/NotFound'
import HomeContainer from '../containers/HomeContainer'
import ApiService from './ApiService'

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
        <Route path="/my_offer/:offerId" component={MyOfferPageContainer} />
        <Route path="/my_offer" component={MyOfferPageContainer} />
        <Route path="/offer/:offerId" component={OfferPageContainer} />
        <Route path="/offer" component={OfferPageContainer} />
        <Route path="/order/:orderId" component={OrderPageContainer} />
        <Route path="/order" component={OrderPageContainer} />
        <Route path="/order_history/:orderId" component={OrderHistoryPageContainer} />
        <Route path="/order_history" component={OrderHistoryPageContainer} />
        <Route path="/term" component={Term} />
        <Route path="/term_mobile" component={TermMobile} />
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