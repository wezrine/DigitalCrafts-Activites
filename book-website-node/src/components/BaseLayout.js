
import React, { Component } from 'react'
import './Base.css'
import Header from './Menu/Header'
import Footer from './Menu/Footer'

export default class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}