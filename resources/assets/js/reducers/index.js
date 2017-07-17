import { combineReducers } from 'redux'
import UserLoginReducer from './UserLoginReducer'
import NotificationReducer from './NotificationReducer'
import LoadingSpinReducer from './LoadingSpinReducer'
import { routerReducer } from 'react-router-redux'

const mcc = combineReducers({
    UserLoginReducer,
    NotificationReducer,
    LoadingSpinReducer,
    router: routerReducer,
})

export default mcc