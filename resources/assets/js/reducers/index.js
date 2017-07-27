import { combineReducers } from 'redux'
import UserLoginReducer from './UserLoginReducer'
import NotificationReducer from './NotificationReducer'
import LoadingSpinReducer from './LoadingSpinReducer'
import ArtReducer from './ArtReducer'
import ArticleReducer from './ArticleReducer'

const mcc = combineReducers({
    UserLoginReducer,
    NotificationReducer,
    LoadingSpinReducer,
    ArtReducer,
    ArticleReducer,
})

export default mcc