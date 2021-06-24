import {ADD_TO_CART, GET_ALL_PRODUCTS, LOADING, SIDEBAR_HANDLER} from "../actions";
import {combineReducers} from 'redux'

const defaultState = {
    products: [],
    loading: false,
    cart: {},
    sidebar: false
}

const preference = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {...state, products: action.payload};

        case LOADING:
            console.log({state})
            return {...state, loading: !state.loading};

        case ADD_TO_CART:
            console.log(action.payload)
            const {_id: id, ...remainProduct} = action.payload
            const cart = state.cart

            if (!!Object.keys(cart).length && Object.keys(cart).includes(id)) {
                const {count, ...remainObj} = cart[id]
                return {...state, cart: {...cart, [id]: {count: count + 1, ...action.payload}}};
            } else {
                return {...state, cart: {...cart, [id]: {count: 1, ...action.payload}}};
            }

        case SIDEBAR_HANDLER:
            return {...state, sidebar: !state.sidebar};
        default:
            return state;
    }
};

export default combineReducers({preference})