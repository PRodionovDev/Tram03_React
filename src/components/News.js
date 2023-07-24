import React from "react"

class News extends React.Component {
    render() {
        return (
            <header>{this.props.title}</header>
        )
    }
}

export default News