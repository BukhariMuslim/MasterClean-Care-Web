import { LOGIN, LOGOUT } from '../actions/DefaultAction'

const UserLoginReducer = (state = '', action) => {
    switch (action.type) {
        case LOGIN:
            const user = action.data;
            return Object.assign({}, state, { user })
        case LOGOUT:
            return ''
        default:
            return state
    }
}

export default UserLoginReducer