import React from "react"

export default class ReviewForm extends React.Component {
  state = { review: "" }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToReview(this.state.review)
    this.setState({ review: "" })
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.handleSubmit(e)
          }}
        >
          <input
            type="text"
            placeholder="Add your review"
            value={this.state.review}
            name="review"
            onChange={this.handleChange}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
