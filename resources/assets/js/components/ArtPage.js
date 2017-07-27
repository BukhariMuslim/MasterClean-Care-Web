import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArticleDetailContainer from '../containers/ArticleDetailContainer'

class ArtPage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <App>
                <div className="row">
                    {
                        this.props.match.params.artId 
                        ?
                        <div>
                            <ArticleDetailContainer id={ this.props.match.params.artId  }/>
                        </div>
                        :
                        <Paper className="col s12" zDepth={1} style={{ padding: "10px" }}>
                            <div>
                                <h5>Daftar ART</h5>
                                <ArticleContainer />
                            </div>
                        </Paper>
                    } 
                </div>
            </App>
        )
    }
}

export default ArtPage
