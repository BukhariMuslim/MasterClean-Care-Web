import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArticleDetailContainer from '../containers/ArticleDetailContainer'

class ArticlePage extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <App>
                <div className="row">
                    {
                        this.props.match.params.articleId 
                        ?
                        <div>
                            <ArticleDetailContainer id={ this.props.match.params.articleId  }/>
                        </div>
                        :
                        <Paper className="col s12" zDepth={1} style={{ padding: "10px" }}>
                            <div>
                                <h5>Artikel</h5>
                                <ArticleContainer />
                            </div>
                        </Paper>
                    } 
                </div>
            </App>
        )
    }
}

export default ArticlePage
