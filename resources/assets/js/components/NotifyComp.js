import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import PropTypes from 'prop-types'

const NotifyComp = ({ onRequestClose, status }) => {
    return (
        <Snackbar
            bodyStyle={{ textAlign: 'center'}}
            open={status.open}
            message={status.message || ''}
            autoHideDuration={4000}
            onRequestClose={() => onRequestClose()}
        />
    )
}

NotifyComp.propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    status: PropTypes.shape({
        open: PropTypes.bool.isRequired,
    }).isRequired
}

export default NotifyComp