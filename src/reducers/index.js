import {ADD_TO_CART, GET_ALL_PRODUCTS, LOADING, SIDEBAR_HANDLER, USER_LOGIN, CLEAR_CART} from "../actions";
import {combineReducers} from 'redux'
import useLocalStorage from "local-storage";

const defaultState = {
    products: [],
    loading: false,
    cart: useLocalStorage.get('ecomm-app') || {},
    sidebar: true,
    loggedIn: false
}

const preference = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload};

        case LOADING:
            return {...state, loading: !state.loading};

        case ADD_TO_CART:
            const {_id: id,} = action.payload
            const cart = state.cart

            if (!!Object.keys(cart).length && Object.keys(cart).includes(id)) {
                const {count} = cart[id]
                const updatedCart = {...cart, [id]: {count: count + 1, ...action.payload}}
                useLocalStorage.set('ecomm-app', updatedCart)
                return {...state, cart: updatedCart};
            } else {
                const updatedCart = {...cart, [id]: {count: 1, ...action.payload}}
                useLocalStorage.set('ecomm-app', updatedCart)
                return {...state, cart: updatedCart};
            }
        case CLEAR_CART:
            return {...state, cart: []}
        case USER_LOGIN:
            return {...state, loggedIn: action.payload};

        case SIDEBAR_HANDLER:
            console.log({state})

            return {...state, sidebar: !state.sidebar};

        default:
            return state;
    }
};

export default combineReducers({preference})