import { RESET_LOADING_SPIN, UPDATE_LOADING_SPIN } from '../actions/DefaultAction'

const LoadingSpinReducer = (state = { show: false }, action) => {
    switch (action.type) {
        case UPDATE_LOADING_SPIN:
            return Object.assign({}, state, {
                show: action.data.show,
            })
        case RESET_LOADING_SPIN:
            return Object.assign({}, state, {
                show: false,
            })
        default:
            return state
    }
}

export default LoadingSpinReducer