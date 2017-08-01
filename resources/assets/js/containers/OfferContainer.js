import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOffer } from '../actions/DefaultAction'
import Offer from '../components/Offer'
import {
    withRouter,
} from 'react-router-dom'
import App from '../components/App'
import ApiService from '../modules/ApiService'

const mapStateToProps = (state) => {
    return {
        offer: state.OfferReducer
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
        getOffer: () => {
            ApiService.onGet(
                '/api/offer', 
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
                        dispatch(fillOffer(data.data))
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

const OfferContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Offer))

export default OfferContainer