import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArtContainer from '../containers/ArtContainer'
import OfferContainer from '../containers/OfferContainer'
import OrderContainer from '../containers/OrderContainer'
import FlatButton from 'material-ui/FlatButton'
import Breadcrumbs from '../modules/Breadcrumbs'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.user && this.props.user.role_id == 2) {
      this.props.getMyOffer(this.props.user.id)
      this.props.getMyOrder(this.props.user.id)
    }
    else {
      this.props.getUserLogin(this)
    }
    this.props.getArt()
    this.props.getOffer()
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
          <Paper className="col s12" zDepth={1} style={{ padding: '10px', marginTop: '10px' }}>
            {
              this.props.user && this.props.user.role_id == 3 ?
              null
              :
              <div className="col s12">
                <h5 style={{ marginTop: 35 }}>
                  ART Pendatang Baru
                  <FlatButton
                    className="right"
                    label="Lihat Semua"
                    primary={true}
                    containerElement={<Link to={"/art"} />}
                  />
                  <div className="clearfix"></div>
                </h5>
                <Divider></Divider>
                <ArtContainer arts={this.props.arts.data || []} maxItem={10} sortBy="created_at" />
              </div>
            }
            {
              this.props.user && this.props.user.role_id == 2 ?
              null
              :
              <div className="col s12">
                <h5 style={{ marginTop: 35 }}>
                  Penawaran Pekerjaan Tersedia
                  <FlatButton
                    className="right"
                    label="Lihat Semua"
                    primary={true}
                    containerElement={<Link to={"/offer"} />}
                  />
                  <div className="clearfix"></div>
                </h5>
                <Divider></Divider>
                <OfferContainer offers={this.props.offers.data || []} maxItem={10} sortBy="start_date" />
              </div>
            }
            {
              this.props.user && (this.props.user.role_id == 2 || this.props.user.role_id == 3) ?
              <div className="col s12">
                <h5 style={{ marginTop: 35 }}>
                  Penawaran Saya
                  <FlatButton
                    className="right"
                    label="Lihat Semua"
                    primary={true}
                    containerElement={<Link to={"/my_offer"} />}
                  />
                  <div className="clearfix"></div>
                </h5>
                <Divider></Divider>
                <OfferContainer offers={this.props.myOffers.data || []} maxItem={10} sortBy="start_date" />
              </div>
              :
              null
            }
            {
              this.props.user && (this.props.user.role_id == 2 || this.props.user.role_id == 3) ?
              <div className="col s12">
                <h5 style={{ marginTop: 35 }}>
                  Pemesanan
                  <FlatButton
                    className="right"
                    label="Lihat Semua"
                    primary={true}
                    containerElement={<Link to={"/order"} />}
                  />
                  <div className="clearfix"></div>
                </h5>
                <Divider></Divider>
                <OrderContainer orders={this.props.orders.data || []} maxItem={10} sortBy="start_date" />
              </div>
              :
              null
            }
          </Paper>
        </div>
      </App>
    )
  }
}

export default withRouter(Home)
