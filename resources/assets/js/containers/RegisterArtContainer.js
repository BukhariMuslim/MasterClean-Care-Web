import React from 'react'
import { connect } from 'react-redux'
import { filterTodo, updateSnack } from '../actions/DefaultAction'
import RegisterArt from '../components/RegisterArt'
import {
    withRouter,
} from 'react-router-dom'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    return {
        status: state.notif
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateSnack: (open, message) => {
            dispatch(updateSnack({
                open: true,
                message: message
            }))
        },
        onRegister: (self, data, history) => {
            ApiService.onPost(
                '/api/user',
                { data },
                function (response) {
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
                            message: 'Mendaftar berhasil! Silahkan login.'
                        }))
                    }
                },
                function (error) {
                    dispatch(updateSnack({
                        open: open,
                        message: error
                    }))
                },
            )
        },
        getPlace: (self, type) =>
        {
            let dataPlace = [];
            ApiService.onGet(
                '/api/place',
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
                        open: open,
                        message: error
                    }))
                    self.setState({ [type]: dataPlace })
                }
            )
        },
        getLanguage: (self, type) => 
        {
            let dataLanguage = [];
            ApiService.onGet(
                '/api/language/',
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
                        message: error
                    }))
                    self.setState({ [type]: dataLanguage })
                }
            )
        },
        getJob: (self, type) => 
        {
            let dataJob = [];
            ApiService.onGet(
                '/api/job/',
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
                        message: error
                    }))
                    self.setState({ [type]: dataJob })
                }
            )
        },
        getWorkTime: (self, type) => 
        {
            let dataWorkTime = [];
            ApiService.onGet(
                '/api/work_time/',
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
                        message: error
                    }))
                    self.setState({ [type]: dataWorkTime })
                }
            )
        },
        getAdditionalInfo: (self, type) => 
        {
            let dataAdditionalInfo = [];
            ApiService.onGet(
                '/api/additional_info/',
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
                        message: error
                    }))
                    self.setState({ [type]: dataAdditionalInfo })
                }
            )
        },
    }
}

const RegisterArtContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(({ history, onUpdateSnack, onRegister, getPlace, getLanguage, getJob, getWorkTime, getAdditionalInfo, status }) => (
    <div className="container">
        <RegisterArt onRegister={ (self, data) => onRegister(self, data, history) }
            onUpdateSnack={ onUpdateSnack }
            getPlace={ getPlace }
            getLanguage= { getLanguage }
            getJob= { getJob }
            getWorkTime= { getWorkTime }
            getAdditionalInfo= { getAdditionalInfo }
            status={ status } />
    </div>
)))

export default RegisterArtContainer
