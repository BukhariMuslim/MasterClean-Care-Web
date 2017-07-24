import React from 'react'
import { connect } from 'react-redux'
import { updateSnack } from '../../actions/DefaultAction'
import { form as Article } from '../../components/admin/article/form'
import {
    withRouter,
} from 'react-router-dom'
import axios from 'axios'
import App from '../../components/App'

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
        onPost: (self, data, history) => {
            axios.post('/api/user', {
                data
            })
            .then(function (response) {
                let data = response.data

                if (data.status != 201) {
                    dispatch(updateSnack({
                        open: true,
                        message: data.message
                    }))
                }
                else {
                    self.resetForm()
                    dispatch(updateSnack({
                        open: true,
                        message: 'Mendaftar berhasil! Silahkan tunggu konfirmasi.'
                    }))
                }
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: true,
                    message: error
                }))
            })
        },
    }
}

const ArticleContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({
    history,
    onUpdateSnack,
    onPost
}) => (
    <App>
        <Article
            onPost={ (self, data) => onPost(self, data, history) } 
            onUpdateSnack={ onUpdateSnack }
            article={ article }
            />
    </App>
)))

export default ArticleContainer