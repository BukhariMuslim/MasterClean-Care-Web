import React from 'react'
import { connect } from 'react-redux'
import { updateSnack, fillOffer } from '../actions/DefaultAction'
import OfferDetail from '../components/OfferDetail'
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
        getOffer: (id, self) => {
            let offer = {}
            ApiService.onGet(
                '/api/offer',
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
                        offer = data.data
                        self.setState({ offer })
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
                    this.setState(offer)                    
                }
            )
        },
    }
}

const OfferDetailContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(OfferDetail))

export default OfferDetailContainer