import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArtContainer from '../containers/ArtContainer'
import FlatButton from 'material-ui/FlatButton'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <App>
        <div className="row">
          <Paper className="col s12" zDepth={1} style={{ padding: '10px', marginTop: '10px' }}>
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
              <ArtContainer maxItem={10} sortBy="crated_at" />
            </div>
            <div className="col s12">
              <h5 style={{ marginTop: 35 }}>
                ART Terunggul
                              <FlatButton
                  className="right"
                  label="Lihat Semua"
                  primary={true}
                  containerElement={<Link to={"/art"} />}
                />
                <div className="clearfix"></div>
              </h5>
              <Divider></Divider>
              <ArtContainer maxItem={10} sortBy="rate" />
            </div>
            <div className="col s12 m8">
              <h5 style={{ marginTop: 35 }}>
                Artikel Terbaru
                              <FlatButton
                  className="right"
                  label="Lihat Semua"
                  primary={true}
                  containerElement={<Link to={"/article"} />}
                />
                <div className="clearfix"></div>
              </h5>
              <Divider></Divider>
              <ArticleContainer maxItem={2} />
            </div>
            <div className="col s12 m4">
              <h5 style={{ marginTop: 35 }}>
                ART Lainnya
                              <FlatButton
                  className="right"
                  label="Lihat Semua"
                  primary={true}
                  containerElement={<Link to={"/art"} />}
                />
                <div className="clearfix"></div>
              </h5>
              <Divider></Divider>
              <ArtContainer isFeatured={true} maxItem={10} sortBy="status" />
            </div>
          </Paper>
        </div>
      </App>
    )
  }
}

export default withRouter(Home)
