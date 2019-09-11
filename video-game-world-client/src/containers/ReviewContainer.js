import React from "react"
import ReviewCard from "../components/ReviewCard"
import ReviewForm from "../components/ReviewForm"

export default class ReviewContainer extends React.Component {
  render() {
    console.log(this.props.reviews)
    let review = this.props.reviews.map(reviewObj => {
      console.log("REVIEW OBJ", reviewObj)
      return <ReviewCard key={reviewObj.id} content={reviewObj} />
    })
    // console.log(content)
    return (
      <div>
        <h3>Game Reviews</h3>
        {review}
        <ReviewForm submitHandler={this.props.submitHandler} />
      </div>
    )
  }
}
