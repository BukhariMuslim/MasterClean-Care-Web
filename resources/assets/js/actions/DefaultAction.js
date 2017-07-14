/*
 *  Action Types
 */
export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const FILTER_TODO = 'FILTER_TODO'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const UPDATE_SNACK = 'UPDATE_SNACK'
export const RESET_SNACK = 'RESET_SNACK'
export const UPDATE_LOADING_SPIN = 'UPDATE_LOADING_SPIN'
export const RESET_LOADING_SPIN = 'RESET_LOADING_SPIN'

/*
 *  Action Creators
 */
let nextTodoId = JSON.parse(localStorage.getItem('nextTodoId'))
export function addTodo(data) {
    let curId = nextTodoId++
    localStorage.setItem('nextTodoId', JSON.stringify(nextTodoId));
    return { type: ADD_TODO, data: data, id: curId }
}

export function editTodo(index) {
    return { type: EDIT_TODO, data: index }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, data: index }
}

export function updateTodo(data) {
    return { type: UPDATE_TODO, data: data }
}

export function removeTodo(index) {
    return { type: REMOVE_TODO, data: index }
}

export function filterTodo(search) {
    return { type: FILTER_TODO, data: search }
}

export function loginAuth(data) {
    return { type: LOGIN, data: data }
}

export function logoutUser() {
    return { type: LOGOUT }
}

export function updateSnack(data) {
    return { type: UPDATE_SNACK, data: data }
}

export function resetSnack() {
    return { type: RESET_SNACK }
}

export function updateLoadingSpin(data) {
    return { type: UPDATE_LOADING_SPIN, data: data }
}

export function resetLoadingSpin() {
    return { type: RESET_LOADING_SPIN }
}