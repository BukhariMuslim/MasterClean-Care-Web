import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import App from './App'

class ArticleDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        this.props.getArticle(this.props.id, this)
    }

    comments(comments) {
        const GetFormattedDate = date => {
            let dt = new Date(date)
            let mm = dt.getMonth() + 1;
            let dd = dt.getDate();

            return [
                    (dd>9 ? '' : '0') + dd,
                    (mm>9 ? '' : '0') + mm,
                    dt.getFullYear()
                    ].join('/');
        };

        return comments.map((comment, id) => {
            return (
                <Card className="col s12" style={ id > 0 ? { marginTop: '10px' } : {}} key={ id }>
                    <CardHeader 
                        title={ comment.user_id.name }
                        subtitle={ GetFormattedDate(comment.created_at) }
                        avatar={ comment.user_id.avatar }
                        />
                    <CardText>
                        { comment.comment }
                    </CardText>
                </Card>
            )
        })
    }

    render() {
        const { article } = this.state;
        console.log(article)
        return (
            <div>
                <div className="row">
                    {
                        article ?
                        <div>
                            <Card className="col s12" >
                                <CardTitle title={ article.title } />
                                <CardText>
                                    { article.content }
                                </CardText>
                            </Card>
                            <Card className="col s12" style={{ marginTop: '10px', paddingBottom: '10px' }}>
                                <CardTitle title="Komentar" />
                                <CardText>
                                    { 
                                        article.comment ? 
                                        this.comments(article.comment) 
                                        :
                                        'Tidak ada komentar.'
                                    } 
                                </CardText>
                            </Card>
                        </div>
                        :
                        <Card className="col s12" >
                            <CardHeader title="Artikel tidak ditemukan" />
                        </Card>
                    }
                </div>
            </div>
        )
    }
}

ArticleDetail.propTypes = {
    id: PropTypes.string.isRequired,
}

export default ArticleDetail