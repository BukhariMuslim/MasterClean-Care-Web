import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import OfferContainer from '../containers/OfferContainer'
import OfferDetailContainer from '../containers/OfferDetailContainer'
import Breadcrumbs from '../modules/Breadcrumbs'

class OfferPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <App>
        <div className="row">
          <nav className="cyan breadcrumbsNav">
            <div className="nav-wrapper">
              <Breadcrumbs pathname={this.props.location.pathname} />
            </div>
          </nav>
          {
            this.props.match.params.offerId
              ?
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }} >
                <OfferDetailContainer id={this.props.match.params.offerId} />
              </Paper>
              :
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <div>
                  <h5>Penawaran</h5>
                  <OfferContainer />
                </div>
              </Paper>
          }
        </div>
      </App>
    )
  }
}

export default OfferPage
