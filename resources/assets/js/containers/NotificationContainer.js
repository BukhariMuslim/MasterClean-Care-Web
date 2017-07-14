import { connect } from 'react-redux'
import NotifyComp from '../components/NotifyComp'
import { resetSnack } from '../actions/DefaultAction'

const mapStateToProps = (state) => {
    return {
        status: state.NotificationReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRequestClose: () => {
            dispatch(resetSnack())
        }
    }
}

const NotificationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotifyComp)

export default NotificationContainer