import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import App from './App'
import ArticleContainer from '../containers/ArticleContainer'
import ArticleDetailContainer from '../containers/ArticleDetailContainer'
import Breadcrumbs from '../modules/Breadcrumbs'

class ArticlePage extends Component {
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
            this.props.match.params.articleId
              ?
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }} >
                <ArticleDetailContainer id={this.props.match.params.articleId} />
              </Paper>
              :
              <Paper className="col s12" zDepth={1} style={{ padding: 10, marginTop: 10 }}>
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
