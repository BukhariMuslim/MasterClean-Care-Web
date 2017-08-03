import { 
    FILL_OFFER,
    ADD_OFFER, 
    EDIT_OFFER, 
    UPDATE_OFFER, 
    REMOVE_OFFER,
} from '../actions/DefaultAction'

const getInitial = () => {
    return {
        id: '',
        title: '',
        tag: '',
        content: '',
        published_date: null,
        isEdit: false,
    }
}

const OfferReducer = (state = [], action) => {
    switch (action.type) {
        case FILL_OFFER:
            return Object.assign([], state, action.data)
        case ADD_OFFER:
            let date = action.data.published_date
            let article = []

            if (Object.keys(date).length !== 0 || date.constructor !== Object) {
                date = new Date(date)
            }

            article = [ 
                ...state,
                {
                    id: action.id,
                    title: action.data.name,
                    tag: action.data.tag,
                    content: action.data.desc,
                    published_date: date,
                    isEdit: false
                }
            ]

            return Object.assign([], state, article)
        case UPDATE_OFFER:
            date = action.data.published_date
            article = []
            if (Object.keys(date).length !== 0 || date.constructor !== Object) {
                date = new Date(date)
            }

            idx = state.map((e) => e.id).indexOf(action.data.id)
            article = [ 
                ...state.slice(0, idx),
                {
                    id: action.id,
                    title: action.data.name,
                    tag: action.data.tag,
                    content: action.data.desc,
                    published_date: date,
                    isEdit: false
                },
                ...state.slice(idx + 1)
            ]
            return Object.assign([], state, article)
        case EDIT_OFFER:
            article = state.map(t => {
                if (state.id !== action.data) {
                    return state
                }

                return Object.assign({}, state, {
                    isEdit: !state.isEdit
                })
            })

            return article
        case REMOVE_OFFER:
            article = state.map(t => {
                let idx = state.map((e) => e.id).indexOf(action.data)
                if (idx > -1) {
                    return [ 
                        ...state.slice(0, idx),
                        ...state.slice(idx + 1)
                    ]
                }
                return state
            })
            
            return article
        default:
            return state
    }
}

export default OfferReducer