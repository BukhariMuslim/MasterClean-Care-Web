import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import App from './App'

class Article extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getArticle()
    }

    articleList(collection) {
        return collection.map((obj, idx) => {
            if (idx < this.props.maxItem || !this.props.maxItem) {
                return (
                    <div key={ obj.id } style={{ padding: '10px' }}>
                        <Card>
                            <CardTitle title={ obj.title } />
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
                                    containerElement={ <Link to={ "/article/" + obj.id } /> }
                                    />
                            </CardActions>
                        </Card>
                    </div>
                )
            }
        })
    }

    render() {
        const { article } = this.props;
        return (
            <div>
                {
                    article.length >0 ?
                    this.articleList(article)
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