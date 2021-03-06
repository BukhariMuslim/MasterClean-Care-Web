import { combineReducers } from 'redux'
import UserLoginReducer from './UserLoginReducer'
import NotificationReducer from './NotificationReducer'
import LoadingSpinReducer from './LoadingSpinReducer'
import ArtReducer from './ArtReducer'
import OrderReducer from './OrderReducer'
import OrderHistoryReducer from './OrderHistoryReducer'
import MyOfferReducer from './MyOfferReducer'
import OfferReducer from './OfferReducer'
import ArticleReducer from './ArticleReducer'

const mcc = combineReducers({
    UserLoginReducer,
    NotificationReducer,
    LoadingSpinReducer,
    ArtReducer,
    OrderReducer,
    OrderHistoryReducer,
    OfferReducer,
    MyOfferReducer,
    ArticleReducer,
})

export default mcc