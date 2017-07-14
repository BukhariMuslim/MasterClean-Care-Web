import { UPDATE_SNACK, RESET_SNACK } from '../actions/DefaultAction'

const NotificationReducer = (state = { open: false, message: '' }, action) => {
    switch (action.type) {
        case UPDATE_SNACK:
            return Object.assign({}, state, {
                open: action.data.open,
                message: action.data.message
            })
        case RESET_SNACK:
            return Object.assign({}, state, {
                open: false,
                message: ''
            })
        default:
            return state
    }
}

export default NotificationReducer