import React, { Component } from 'react'

class Article extends Component {
    render() {
        return (
            <div className="article">
                <h1>{this.props.title}</h1>
                <p>{this.props.body}</p>
                <div className="row">
                    <h3>{this.props.numberComments} comments</h3>
                    <h3>{this.props.numberLikes} likes</h3>
                </div>

            </div>
        )
    }
}

export default Article