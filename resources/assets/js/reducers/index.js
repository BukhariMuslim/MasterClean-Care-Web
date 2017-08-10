import { combineReducers } from 'redux'
import UserLoginReducer from './UserLoginReducer'
import NotificationReducer from './NotificationReducer'
import LoadingSpinReducer from './LoadingSpinReducer'
import ArtReducer from './ArtReducer'
import OrderReducer from './OrderReducer'
import OfferReducer from './OfferReducer'
import ArticleReducer from './ArticleReducer'

const mcc = combineReducers({
    UserLoginReducer,
    NotificationReducer,
    LoadingSpinReducer,
    ArtReducer,
    OrderReducer,
    OfferReducer,
    ArticleReducer,
})

export default mcc