import React from "react"
import ReviewCard from "../components/ReviewCard"

export default class ReviewContainer extends React.Component {
  render() {
    // console.log(this.props.reviews)
    let reviews = this.props.reviews.map(reviewObj => {
      return <ReviewCard key={reviewObj.id} review={reviewObj} />
    })
    return (
      <div>
        <h3>Game Reviews</h3>
        {reviews}
      </div>
    )
  }
}
