import { 
    FILL_ART,
    ADD_ART, 
    EDIT_ART, 
    UPDATE_ART, 
    REMOVE_ART,
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

const ArticleReducer = (state = [], action) => {
    switch (action.type) {
        case FILL_ART:
            return Object.assign([], state, action.data)
        case ADD_ART:
            let date = action.data.published_date
            let art = []

            if (Object.keys(date).length !== 0 || date.constructor !== Object) {
                date = new Date(date)
            }

            art = [ 
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

            return Object.assign([], state, art)
        case UPDATE_ART:
            date = action.data.published_date
            art = []
            if (Object.keys(date).length !== 0 || date.constructor !== Object) {
                date = new Date(date)
            }

            idx = state.map((e) => e.id).indexOf(action.data.id)
            art = [ 
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
            return Object.assign([], state, art)
        case EDIT_ART:
            art = state.map(t => {
                if (state.id !== action.data) {
                    return state
                }

                return Object.assign({}, state, {
                    isEdit: !state.isEdit
                })
            })

            return art
        case REMOVE_ART:
            art = state.map(t => {
                let idx = state.map((e) => e.id).indexOf(action.data)
                if (idx > -1) {
                    return [ 
                        ...state.slice(0, idx),
                        ...state.slice(idx + 1)
                    ]
                }
                return state
            })
            
            return art
        default:
            return state
    }
}

export default ArticleReducer