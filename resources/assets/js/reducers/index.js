import { combineReducers } from 'redux'
import UserLoginReducer from './UserLoginReducer'
import NotificationReducer from './NotificationReducer'
import LoadingSpinReducer from './LoadingSpinReducer'

const mcc = combineReducers({
    UserLoginReducer,
    NotificationReducer,
    LoadingSpinReducer,
})

export default mcc