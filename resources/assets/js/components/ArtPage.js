import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import App from './App'
import ArtContainer from '../containers/ArtContainer'
import ArtDetailContainer from '../containers/ArtDetailContainer'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Breadcrumbs from '../modules/Breadcrumbs'

class ArtPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded})
  }

  handleToggle() {
    const oldExpand = this.state.expanded
    this.setState({expanded: !oldExpand});
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
            this.props.match.params.artId
              ?
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <ArtDetailContainer id={this.props.match.params.artId} />
              </Paper>
              :
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="col s12" zDepth={0} >
                  <CardTitle>
                    <h5 style={{ marginTop: 35 }}>
                      Daftar ART
                      <IconButton tooltip="Pencarian" className="right" onClick={this.handleToggle}>
                        <FontIcon className="material-icons">
                          {
                            this.state.expanded ?
                            'clear'
                            :
                            'search'
                          }
                        </FontIcon>
                      </IconButton>
                      <div className="clearfix"></div>
                    </h5>
                    <Divider></Divider>
                  </CardTitle>
                  <CardText expandable={true}>
                    Filter
                  </CardText>
                  <CardText>
                    <ArtContainer />
                  </CardText>
                </Card>
              </Paper>
          }
        </div>
      </App>
    )
  }
}

export default ArtPage
