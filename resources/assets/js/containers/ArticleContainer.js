import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArticle } from '../actions/DefaultAction'
import Article from '../components/Article'
import {
    withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    return {
        article: state.ArticleReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        onUpdateSnack: (open, message) => {
            dispatch(updateSnack({
                open: true,
                message: message
            }))
        },
        getArticle: () => {
            ApiService.onGet(
                '/api/article', 
                '',
                function (response) {
                    let data = response
                    if (data.status != 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dispatch(fillArticle(data.data))
                    }
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error.name + ": " + error.message
                    }))
                }
            )
        },
    }
}

const ArticleContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Article))

export default ArticleContainer