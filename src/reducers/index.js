import {ADD_TO_CART, GET_ALL_PRODUCTS, LOADING, SIDEBAR_HANDLER} from "../actions";
import {combineReducers} from 'redux'
import useLocalStorage from "local-storage";

const defaultState = {
    products: [],
    loading: false,
    cart: useLocalStorage.get('ecomm-app') || {},
    sidebar: true
}

const preference = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload};

        case LOADING:
            return {...state, loading: !state.loading};

        case ADD_TO_CART:
            const {_id: id, ...remainProduct} = action.payload
            const cart = state.cart

            if (!!Object.keys(cart).length && Object.keys(cart).includes(id)) {
                const {count, ...remainObj} = cart[id]
                const updatedCart = {...cart, [id]: {count: count + 1, ...action.payload}}
                useLocalStorage.set('ecomm-app', updatedCart)
                return {...state, cart: updatedCart};
            } else {
                const updatedCart = {...cart, [id]: {count: 1, ...action.payload}}
                useLocalStorage.set('ecomm-app', updatedCart)
                return {...state, cart: updatedCart};
            }

        case SIDEBAR_HANDLER:
            return {...state, sidebar: !state.sidebar};
        default:
            return state;
    }
};

export default combineReducers({preference})