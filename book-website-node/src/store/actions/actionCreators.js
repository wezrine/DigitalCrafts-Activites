import * as actionTypes from './actionTypes'

export const addToCart = (book) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: book
    }
}

export const removeFromCart = (book) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: book
    }
}