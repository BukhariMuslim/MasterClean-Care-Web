import React from 'react'
import { connect } from 'react-redux'
import { filterTodo, updateSnack } from '../actions/DefaultAction'
import RegisterArt from '../components/RegisterArt'
import {
    withRouter,
} from 'react-router-dom'
import axios from 'axios'

const mapStateToProps = (state) => {
    return {
        status: state.notif
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdateSnack: (open, message) => {
            dispatch(updateSnack({
                open: open,
                message: message
            }))
        },
        onRegister: (self, data, history) => {
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
                    open: open,
                    message: error
                }))
            })
        },
        getPlace: (self, type, lvl = 0) => 
        {
            let dataPlace = [];
            axios.get('/api/place/search/parent/equal/' + lvl)
            .then(function (response) {
                let data = response.data
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
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: open,
                    message: error
                }))
                self.setState({ [type]: dataPlace })
            })
        },
        getLanguage: (self, type) => 
        {
            let dataLanguage = [];
            axios.get('/api/language/')
            .then(function (response) {
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
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: open,
                    message: error
                }))
                self.setState({ [type]: dataLanguage })
            })
        },
        getJob: (self, type) => 
        {
            let dataJob = [];
            axios.get('/api/job/')
            .then(function (response) {
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
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: open,
                    message: error
                }))
                self.setState({ [type]: dataLanguage })
            })
        },
        getWorkTime: (self, type) => 
        {
            let dataWorkTime = [];
            axios.get('/api/work_time/')
            .then(function (response) {
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
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: open,
                    message: error
                }))
                self.setState({ [type]: dataLanguage })
            })
        },
        getAdditionalInfo: (self, type) => 
        {
            let dataAdditionalInfo = [];
            axios.get('/api/additional_info/')
            .then(function (response) {
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
            })
            .catch(function (error) {
                dispatch(updateSnack({
                    open: open,
                    message: error
                }))
                self.setState({ [type]: dataAdditionalInfo })
            })
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
