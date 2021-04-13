import './App.css'
import { Component } from 'react';
import Header from './Header'
import BooksList from './BooksList'
import Footer from './Footer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {

      this.setState({
        books: books
      })
    })
  }

render() {

  return (
    <div>
      <Header />
      <BooksList books = {this.state.books}/>
      <Footer />
    </div>
  )
}


}

export default App;
