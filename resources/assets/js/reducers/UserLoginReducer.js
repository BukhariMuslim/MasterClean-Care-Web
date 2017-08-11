import { LOGIN, LOGOUT } from '../actions/DefaultAction'

const UserLoginReducer = (state = null, action) => {
    switch (action.type) {
        case LOGIN:
            const user = action.data;
            return Object.assign({}, state, user)
        case LOGOUT:
            return null
        default:
            return state
    }
}

export default UserLoginReducer