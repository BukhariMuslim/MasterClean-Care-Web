import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import App from './App'
import ArtContainer from '../containers/ArtContainer'
import ArtDetailContainer from '../containers/ArtDetailContainer'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import Breadcrumbs from '../modules/Breadcrumbs'
import Pager from '../modules/Pager'

class ArtPage extends Component {
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

  generatePaging(data) {
    if (data && data.last_page) {
      let i
      let comp = []
      if (data.prev_page_url) {
        comp.push(
          <Link key={comp.length} to={ data.prev_page_url } >Sebelumnya</Link>
        )
      }
      for (i = 0; i < data.last_page; i++) {
        const c = i + 1
        comp.push(
          <Link key={ comp.length } to={ data.path + '?page=' + c} >{c}</Link>
        )
      }
      if (data.next_page_url) {
        comp.push(
          <Link key={ comp.length } to={ data.next_page_url } >Selanjutnya</Link>
        )
      }
      return comp
    }
  }

  componentDidMount() {
    this.props.getArt()
  }

  handlePageChanged(newPage) {
		this.props.getArt(newPage + 1)
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
                      <small style={{ fontSize: 12 }}>
                        <i>
                          Menampilkan <b>{ this.props.arts.from }</b> - <b>{ this.props.arts.to }</b> dari <b>{ this.props.arts.total }</b> ART
                        </i>
                      </small>
                    </h5>
                    <Divider></Divider>
                  </CardTitle>
                  <CardText expandable={true}>
                    Filter
                  </CardText>
                  <CardText>
                    <ArtContainer arts={this.props.arts.data || [] } />
                    <Pager
                      total={this.props.arts.last_page || 1}
                      current={this.props.arts.current_page ? this.props.arts.current_page - 1 : 1}
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

export default ArtPage
