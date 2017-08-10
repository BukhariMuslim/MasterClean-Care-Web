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
export const FILL_ART = 'FILL_ART'
export const ADD_ART = 'ADD_ART'
export const EDIT_ART = 'EDIT_ART'
export const UPDATE_ART = 'UPDATE_ART'
export const REMOVE_ART = 'REMOVE_ART'
export const FILL_ARTICLE = 'FILL_ARTICLE'
export const ADD_ARTICLE = 'ADD_ARTICLE'
export const EDIT_ARTICLE = 'EDIT_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
export const FILL_OFFER = 'FILL_OFFER'
export const ADD_OFFER = 'ADD_OFFER'
export const EDIT_OFFER = 'EDIT_OFFER'
export const UPDATE_OFFER = 'UPDATE_OFFER'
export const REMOVE_OFFER = 'REMOVE_OFFER'
export const FILL_ORDER = 'FILL_ORDER'
export const ADD_ORDER = 'ADD_ORDER'
export const EDIT_ORDER = 'EDIT_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'
export const REMOVE_ORDER = 'REMOVE_ORDER'

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

export function fillArticle(data) {
    return { type: FILL_ARTICLE, data: data }
}

export function addArticle(data) {
    return { type: ADD_ARTICLE, data: data }
}

export function editArticle(index) {
    return { type: EDIT_ARTICLE, data: index }
}

export function updateArticle(data) {
    return { type: UPDATE_ARTICLE, data: data }
}

export function removeArticle(index) {
    return { type: REMOVE_ARTICLE, data: index }
}

export function fillArt(data) {
    return { type: FILL_ART, data: data }
}

export function addArt(data) {
    return { type: ADD_ART, data: data }
}

export function editArt(index) {
    return { type: EDIT_ART, data: index }
}

export function updateArt(data) {
    return { type: UPDATE_ART, data: data }
}

export function removeArt(index) {
    return { type: REMOVE_ART, data: index }
}

export function fillOffer(data) {
    return { type: FILL_OFFER, data: data }
}

export function addOffer(data) {
    return { type: ADD_OFFER, data: data }
}

export function editOffer(index) {
    return { type: EDIT_OFFER, data: index }
}

export function updateOffer(data) {
    return { type: UPDATE_OFFER, data: data }
}

export function removeOffer(index) {
    return { type: REMOVE_OFFER, data: index }
}

export function fillOrder(data) {
    return { type: FILL_ORDER, data: data }
}

export function addOrder(data) {
    return { type: ADD_ORDER, data: data }
}

export function editOrder(index) {
    return { type: EDIT_ORDER, data: index }
}

export function updateOrder(data) {
    return { type: UPDATE_ORDER, data: data }
}

export function removeOrder(index) {
    return { type: REMOVE_ORDER, data: index }
}