import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import ProfileDetailContainer from '../containers/ProfileDetailContainer'
import Breadcrumbs from '../modules/Breadcrumbs'

class ProfilePage extends Component {
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
          <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }} >
            <ProfileDetailContainer />
          </Paper>
        </div>
      </App>
    )
  }
}

export default ProfilePage
