export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
export const LOADING = 'LOADING'
export const ADD_TO_CART = 'ADD_TO_CART'
export const SIDEBAR_HANDLER = 'SIDEBAR_HANDLER'
export const USER_LOGIN = 'USER_LOGIN'

export const setProductsData = (data) => ({
    type: GET_ALL_PRODUCTS,
    payload: data
})

export const loading = () => ({
    type: LOADING,
})

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
})

export const sidebarHandler = () => ({
    type: SIDEBAR_HANDLER,
})

export const loggedIn = (boolean) => ({
    type: USER_LOGIN,
    payload: boolean
})