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
                        const oldArt = self.state.art
                        self.setState({ art: Object.assign({}, oldArt, art) })
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
                    this.setState(art)                    
                }
            )
        },
        getPlace: (self, type) =>
        {
            let dataPlace = []
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
                    self.setState({ [type]: dataPlace })
                },
                function (error) {
                    dispatch(updateSnack({
<<<<<<< HEAD
                        open: true,
                        message: error.name + ": " + error.message
=======
                        open: open,
                        message: error
>>>>>>> feb77da944dd16fd280d56db55d90d3fa702ad23
                    }))
                    self.setState({ [type]: dataPlace })
                }
            )
        },
        getLanguage: (self, type) => 
        {
            let dataLanguage = []
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
                    self.setState({ [type]: dataLanguage })
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
                    self.setState({ [type]: dataLanguage })
                }
            )
        },
        getJob: (self, type) => 
        {
            let dataJob = []
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
                    self.setState({ [type]: dataJob })
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
                    self.setState({ [type]: dataJob })
                }
            )
        },
        getWorkTime: (self, type) => 
        {
            let dataWorkTime = []
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
                    self.setState({ [type]: dataWorkTime })
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
                    self.setState({ [type]: dataWorkTime })
                }
            )
        },
        getAdditionalInfo: (self, type) => 
        {
            let dataAdditionalInfo = []
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
                    self.setState({ [type]: dataAdditionalInfo })
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
                    self.setState({ [type]: dataAdditionalInfo })
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