import React, { Component } from 'react'

class BooksList extends Component {

render() {

    const books = this.props.books
    const bookItems = books.map((book) => {
        return <div class = "book">
            <h6>{book.title}</h6>
            <h6 className="author">By: {book.author}</h6>
            <img className = "image" src = {`https://github.com/benoitvallon/100-best-books/blob/master/static/${book.imageLink}?raw=true`} />
        </div>
    })

    return (
      <div class="booksContainer">{bookItems}</div>
    )
  }
}

export default BooksList