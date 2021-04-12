import React, { Component } from 'react'

class Feature extends Component {
    render() {
        return (
            <div className="feature">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
            </div>
        )
    }
}

export default Feature