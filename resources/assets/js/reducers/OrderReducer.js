import { 
    FILL_ORDER,
    ADD_ORDER, 
    EDIT_ORDER, 
    UPDATE_ORDER, 
    REMOVE_ORDER,
} from '../actions/DefaultAction'

const getInitial = () => {
    return {
      current_page: 1,
      data: [],
      from: null,
      last_page: 1,
      next_page_url: null,
      path: '',
      per_page: 10,
      prev_page_url: '',
      to: null,
      total: 0,
    }
}

const OrderReducer = (state = [], action) => {
    switch (action.type) {
        case FILL_ORDER:
            return Object.assign([], state, action.data)
        case ADD_ORDER:
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
        case UPDATE_ORDER:
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
        case EDIT_ORDER:
            article = state.map(t => {
                if (state.id !== action.data) {
                    return state
                }

                return Object.assign({}, state, {
                    isEdit: !state.isEdit
                })
            })

            return article
        case REMOVE_ORDER:
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

export default OrderReducer