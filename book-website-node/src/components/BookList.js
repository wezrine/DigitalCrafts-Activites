import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actionCreators'

function BookList(props) {

    const books = props.books

    const addToCart = (book) => {
        props.onAddToCart(book)
        console.log(`Added ${book.title} to the cart.`)
    }

    const bookItems = books.map((book) => {
        
        return (
        <div className = "book">
            <div className = "book-info">
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
            </div>
            <img src={book.imageURL} alt={book.title}></img>
            <div onClick={() => {addToCart(book)}}>Add to Cart</div>
        </div>
        )
    })

    return (
        <div className = "books-page">
            <h3>Books</h3>
            <div className = "books-container">{bookItems}</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onAddToCart: (book) => dispatch(actionCreator.addToCart(book))
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)