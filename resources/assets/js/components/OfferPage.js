import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import App from './App'
import OfferContainer from '../containers/OfferContainer'
import OfferDetailContainer from '../containers/OfferDetailContainer'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Breadcrumbs from '../modules/Breadcrumbs'
import Pager from '../modules/Pager'

class OfferPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.handlePageChanged = this.handlePageChanged.bind(this)
  }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded})
  }

  handleToggle() {
    const oldExpand = this.state.expanded
    this.setState({expanded: !oldExpand});
  }

  componentDidMount() {
    this.props.getOffer()
  }

  handlePageChanged(newPage) {
		this.props.getOffer(newPage + 1)
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
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} className="col s12" zDepth={0} >
                  <CardTitle>
                    <h5 style={{ marginTop: 35 }}>
                      Penawaran
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
                      {
                        this.props.offers.total ?
                        <small style={{ fontSize: 12 }}>
                          <i>
                            Menampilkan <b>{ this.props.offers.from }</b> - <b>{ this.props.offers.to }</b> dari total <b>{ this.props.offers.total }</b> Penawaran
                          </i>
                        </small>
                        :
                        null
                      }
                    </h5>
                    <Divider></Divider>
                  </CardTitle>
                  <CardText expandable={true}>
                    Filter
                  </CardText>
                  <CardText>
                    <OfferContainer offers={this.props.offers.data || [] } />
                    <Pager
                      total={this.props.offers.last_page || 1}
                      current={this.props.offers.current_page ? this.props.offers.current_page - 1 : 1}
                      visiblePages={ 3 }
                      onPageChanged={this.handlePageChanged}
                    />
                  </CardText>
                </Card>
              </Paper>
          }
        </div>
      </App>
    )
  }
}

export default OfferPage
