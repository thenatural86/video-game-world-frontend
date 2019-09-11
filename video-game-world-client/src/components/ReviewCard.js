import React from "react"

export default class ReviewCard extends React.Component {
  render() {
    console.log(this.props.content.review)
    return (
      <div>
        {/* {this.props.content} */}
        {this.props.content}
      </div>
    )
  }
}
