import React, { useState, useEffect } from 'react'
import BookList from './BookList'

function BookListPage () {

    const [books, setBooks] = useState([])

    useEffect (() => {
        getAllBooks()
    },[])

    const getAllBooks = () => {
        fetch('http://localhost:8080/books')
        .then(response => response.json())
        .then(books => {
            console.log(books)
            setBooks(books)
        })
    }

    return (
        <BookList books = {books} />
    )
}

export default BookListPage