import React from 'react'
import CartList from './CartList'
import { connect } from 'react-redux'

function CartPage(props) {

    const books = props.cart

    return (
        <div>
            <h1>Your Cart</h1>
            <CartList books = {books} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(CartPage)