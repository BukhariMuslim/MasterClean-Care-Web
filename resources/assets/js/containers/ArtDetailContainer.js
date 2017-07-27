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
    return { 
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
        getArt: (id, self) => {
            let art = {}
            ApiService.onGet(
                '/api/user',
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
        getPlace: (self, type) =>
        {
            let dataPlace = []
            let art = self.state.art
            ApiService.onGet(
                '/api/place',
                '',
                function (response) {
                    let data = response
                    if (data.status !== 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dataPlace = data.data
                    }
                    self.setState({ art: Object.assign({}, art, { [type]: dataPlace }) })
                },
                function (error) {
                    dispatch(updateSnack({
                        open: open,
                        message: error
                    }))
                    self.setState({ art: Object.assign({}, art, { [type]: dataPlace }) })
                }
            )
        },
        getLanguage: (self, type) => 
        {
            let dataLanguage = []
            let art = self.state.art
            ApiService.onGet(
                '/api/language/',
                '',
                function (response) {
                    let data = response
                    if (data.status !== 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dataLanguage = data.data
                    }
                    self.setState({ art: Object.assign({}, art, { [type]: dataLanguage }) })
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error
                    }))
                    self.setState({ art: Object.assign({}, art, { [type]: dataLanguage }) })
                }
            )
        },
        getJob: (self, type) => 
        {
            let dataJob = []
            let art = self.state.art
            ApiService.onGet(
                '/api/job/',
                '',
                function (response) {
                    let data = response
                    if (data.status !== 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dataJob = data.data
                    }
                    self.setState({ art: Object.assign({}, art, { [type]: dataJob }) })
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error
                    }))
                    self.setState({ art: Object.assign({}, art, { [type]: dataJob }) })
                }
            )
        },
        getWorkTime: (self, type) => 
        {
            let dataWorkTime = []
            let art = self.state.art
            ApiService.onGet(
                '/api/work_time/',
                '',
                function (response) {
                    let data = response
                    if (data.status !== 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dataWorkTime = data.data
                    }
                    self.setState({ art: Object.assign({}, art, { [type]: dataWorkTime }) })
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error
                    }))
                    self.setState({ art: Object.assign({}, art, { [type]: dataWorkTime }) })
                }
            )
        },
        getAdditionalInfo: (self, type) => 
        {
            let dataAdditionalInfo = []
            let art = self.state.art
            ApiService.onGet(
                '/api/additional_info/',
                '',
                function (response) {
                    let data = response
                    if (data.status !== 200) {
                        dispatch(updateSnack({
                            open: true,
                            message: data.message
                        }))
                    }
                    else {
                        dataAdditionalInfo = data.data
                    }
                    self.setState({ art: Object.assign({}, art, { [type]: dataAdditionalInfo }) })
                },
                function (error) {
                    dispatch(updateSnack({
                        open: true,
                        message: error
                    }))
                    self.setState({ art: Object.assign({}, art, { [type]: dataAdditionalInfo }) })
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