import React from "react"

export default class ReviewCard extends React.Component {
  render() {
    // console.log(this.props.review.content)
    return <h5>{this.props.review}</h5>
  }
}
