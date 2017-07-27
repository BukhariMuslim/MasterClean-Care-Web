import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillArt } from '../actions/DefaultAction'
import ArtDetail from '../components/ArtDetail'
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
        getArt: (id, self) => {
            let art = {}
            ApiService.onGet(
                '/api/art',
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
                        art = data.data
                        self.setState({ art })
                    }
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error
                    }))
                    this.setState(art)                    
                }
            )
        },
    }
}

const ArtDetailContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(ArtDetail))

export default ArtDetailContainer