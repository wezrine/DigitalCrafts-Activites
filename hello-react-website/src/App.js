import React, { Component } from 'react'
import './App.css';

import Header from './Header'
import Feature from './Feature'
import Article from './Article'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feature title="Intro to React JS" body="React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality." />
        <Article title="Hello, World" body='A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is often used to illustrate the basic syntax of a programming language. It is often the first program written by people learning to code. It can also be used as a sanity test to make sure that a computer language is correctly installed, and that the operator understands how to use it.' numberComments="10" numberLikes="20" />
        <Article title="Foobar" body='The terms foobar (/ˈfuːbɑːr/), foo, bar, and others are used as metasyntactic variables and placeholder names in computer programming or computer-related documentation.[1] They have been used to name entities such as variables, functions, and commands whose exact identity is unimportant and serve only to demonstrate a concept.' numberComments="15" numberLikes="25" />
      </div>
    )
  }
}

export default App;