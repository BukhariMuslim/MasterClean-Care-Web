import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const configureStore = (middleware, initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, middleware)
    )
}

export default configureStore