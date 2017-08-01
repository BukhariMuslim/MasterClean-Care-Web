import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArticle } from '../actions/DefaultAction'
import ArticleDetail from '../components/ArticleDetail'
import {
    withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onUpdateSnack: (open, message) => {
            dispatch(updateSnack({
                open: true,
                message: message
            }))
        },
        getArticle: (id, self) => {
            let article = {}
            ApiService.onGet(
                '/api/article',
                id,
                function (response) {
                    let data = response

                    if (data.status != 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        article = data.data
                        self.setState({ article })
                    }
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
<<<<<<< HEAD
                        message: error.name + ": " + error.message
=======
                        message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                    }))
                    this.setState(article)                    
                }
            )
        },
    }
}

const ArticleDetailContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleDetail))

export default ArticleDetailContainer