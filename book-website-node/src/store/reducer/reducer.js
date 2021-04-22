
const initialState = {
    count: 0,
    cart: [],
    isAuthenticated: false
}

const reducer = (state = initialState, action) => {

    if(action.type === 'LOGIN') {
        return {
            ...state,
            isAuthenticated: true
        }
    }

    if(action.type === 'LOGOUT') {
        return {
            ...state,
            isAuthenticated: false
        }
    }

    if(action.type === 'ADD_TO_CART') {
        return {
            ...state,
            count: state.count + 1,
            cart: state.cart.concat(action.payload)
        }
    }

    if(action.type === 'REMOVE_FROM_CART') {
        return {
            ...state,
            count: state.count - 1,
            cart: state.cart.filter((books) => books.id !== action.payload.id)
        }
    }

    return state
}

export default reducer