import React from "react"

export default class AddForm extends React.Component {
  state = { title: "", genre: "", releaseYear: "", image: "" }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addToGames(this.state)
    this.setState({ title: "", genre: "", releaseYear: "", image: "" })
  }

  render() {
    return (
      <div>
        <h5>Add a Game here</h5>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="Title"
            value={this.state.title}
            name="title"
            onChange={e => {
              this.changeHandler(e)
            }}
          />
          <input
            type="text"
            placeholder="Genre"
            value={this.state.genre}
            name="genre"
            onChange={e => {
              this.changeHandler(e)
            }}
          />
          <input
            type="text"
            placeholder="Release Year"
            value={this.state.releaseYear}
            name="releaseYear"
            onChange={e => {
              this.changeHandler(e)
            }}
          />
          <input
            type="text"
            placeholder="Image"
            value={this.state.image}
            name="image"
            onChange={e => {
              this.changeHandler(e)
            }}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
