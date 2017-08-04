import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import { GridList, GridTile } from 'material-ui/GridList'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import { FormattedRelative } from 'react-intl'
import App from './App'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  gridListVertical: {
    overflowY: 'auto',
    flexWrap: 'wrap',
  },
  titleStyle: {
    color: 'rgb(255, 255, 255)',
  },
}

class Article extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getArticle()
  }

  articleList(collection) {
    // if (this.props.sortBy) {
    //   let sort = this.props.sortBy
    //   collection.sort(function (a, b) {
    //     return parseFloat(b[sort]) - parseFloat(a[sort])
    //   })
    // }
    
    return collection.map((obj, idx) => {
      if (!this.props.maxItem || idx < this.props.maxItem) {
        return (
          <GridTile
            key={idx}
            cols={1}
          >
            <Card>
              <CardTitle 
                title={ <h5>{obj.title} <small>by {obj.user_id.name}</small></h5>} 
                subtitle={<small><FormattedRelative value={obj.published_date} /></small>}/>
              <CardText>
                {
                  obj.content.length > 200 ?
                    obj.content.substring(0, 200) + '...'
                    :
                    obj.content
                }
              </CardText>
              <CardActions className="right-align">
                <FlatButton
                  label="Selengkapnya..."
                  containerElement={<Link to={"/article/" + obj.id} />}
                />
              </CardActions>
            </Card>
            <Divider />
          </GridTile>
        )
      }
    })
  }
  articleList1(collection) {
    return collection.map((obj, idx) => {
      if (idx < this.props.maxItem || !this.props.maxItem) {
        return (
          <div key={obj.id} style={{ padding: '10px' }}>
            <Card>
              <CardTitle 
                title={ <span>{obj.title} <small>by {obj.user.name}</small></span>} 
                subtitle={<small><FormattedRelative value={obj.published_date} /></small>}/>
              <CardText>
                {
                  obj.content.length > 200 ?
                    obj.content.substring(0, 200) + '...'
                    :
                    obj.content
                }
              </CardText>
              <CardActions className="right-align">
                <FlatButton
                  label="Selengkapnya..."
                  containerElement={<Link to={"/article/" + obj.id} />}
                />
              </CardActions>
            </Card>
          </div>
        )
      }
    })
  }

  render() {
    const { article } = this.props
    return (
      <div>
        {
          article.length > 0 ?
            <GridList
              style={styles.gridListVertical}
              cols={1}
              padding={1}
              cellHeight={'auto'}
            >
              {this.articleList(article)}
            </GridList>
            :
            <small>Tidak ada artikel ditemukan</small>
        }
      </div>
    )
  }
}

Article.propTypes = {
  article: PropTypes.array.isRequired,
  getArticle: PropTypes.func.isRequired,
}

export default Article