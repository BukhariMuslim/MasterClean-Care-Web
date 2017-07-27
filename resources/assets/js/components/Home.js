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
                        <h5>
                            ART Terbaru
                            <FlatButton 
                                className="right"
                                label="Lihat Semua" 
                                containerElement={ <Link to={ "/art" } /> }
                                />
                            <div className="clearfix"></div>
                        </h5>
                        <Divider></Divider>
                        <ArtContainer maxItem={ 10 } sortBy="crated_at" />
                        <h5>
                            ART Terunggul
                            <FlatButton 
                                className="right"
                                label="Lihat Semua" 
                                containerElement={ <Link to={ "/art" } /> }
                                />
                            <div className="clearfix"></div>
                        </h5>
                        <Divider></Divider>
                        <ArtContainer maxItem={ 10 } sortBy="rate" />
                        <Divider></Divider>
                        <h5>
                            Artikel Terbaru
                            <FlatButton 
                                className="right"
                                label="Lihat Semua" 
                                containerElement={ <Link to={ "/article" } /> }
                                />
                            <div className="clearfix"></div>
                        </h5>
                        <Divider></Divider>
                        <ArticleContainer maxItem={ 2 } />
                    </Paper>
                </div>
            </App>
        )
    }
}

export default withRouter(Home)
