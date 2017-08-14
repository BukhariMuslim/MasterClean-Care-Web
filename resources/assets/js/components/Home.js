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

const LogoImg = '/img/logo.png'

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
          <div className="col s12" style={{ marginTop: '35px' }}>
            <div className="col hide-on-small-only m2">&nbsp;</div>
            <div className="col s12 m8">
              <img src={LogoImg} style={{height: 'auto', width: '200px', verticalAlign: 'middle', marginRight: 10, display: 'inline-block' }} alt="Master Clean &amp; Care"/>
              <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>
                Selamat datang di
                <h4>
                  <span style={{ background: '#00bcd4', color: 'white', padding: '2px 5px'}}>
                    Master Clean &amp; Care
                  </span>
                </h4>
                <small style={{ color: '#00bcd4' }} >Temukan solusi kebersihan dan perawatan rumah tangga terbaik.</small>
              </span>
            </div>
            <div className="col s12">
              <Divider style={{ marginTop: 40, marginBottom: 40 }}></Divider>
            </div>
            <div className="col s12">
              <div className="col s12 m4">
                <div className="center">
                  <i className="material-icons" style={{ fontSize: '7rem', color: '#00bcd4' }}>thumb_up</i>
                  <p>Mudah</p>
                  <p className="light center">
                    Memesan dan mencari menjadi lebih mudah sesuai dengan pilihan dan kebutuhan yang Anda inginkan.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="center">
                  <i className="material-icons" style={{ fontSize: '7rem', color: '#00bcd4' }}>lock</i>
                  <p>Aman</p>
                  <p className="light center">
                    Transaksi lebih aman menggunakan sistem <i>Wallet</i>.
                  </p>
                </div>
              </div>
              <div className="col s12 m4">
                <div className="center">
                  <i className="material-icons" style={{ fontSize: '7rem', color: '#00bcd4' }}>location_on</i>
                  <p>Dimana saja</p>
                  <p className="light center">
                    Pesan ART di mana saja disekitar Anda melalui aplikasi <i>mobile</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Paper className="col s12" zDepth={1} style={{ padding: '10px', marginTop: '25px' }}>
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
