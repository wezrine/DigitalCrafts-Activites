import { connect } from 'react-redux'
import * as actionCreator from '../store/actions/actionCreators'

function BookList(props) {

    const books = props.books

    const removeFromCart = (book) => {
        props.onRemoveFromCart(book)
        console.log(`Removed ${book.title} from the cart.`)
    }

    const bookItems = books.map((book) => {
        
        return (
        <div className = "book">
            <div className = "book-info">
                <h4>{book.title}</h4>
                <h5>{book.author}</h5>
            </div>
            <img src={book.imageURL} alt={book.title}></img>
            <div className="remove-book" onClick={() => {removeFromCart(book)}}>Remove from Cart</div>
        </div>
        )
    })

    return (
        <div className = "books-page">
            <div>{props.count} books in cart.</div>
            <div className = "books-container">{bookItems}</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        onRemoveFromCart: (book) => dispatch(actionCreator.removeFromCart(book))
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.isAuthenticated,
        count: state.count
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)