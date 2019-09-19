import React from "react"
// import { Link } from "react-router-dom"

export default class GameCard extends React.Component {
  render() {
    // console.log(this.props)

    return (
      <div className="gameCardContainer" style={{ width: "200px" }}>
        <div className="title">
          <strong>Title: </strong>
          {this.props.game.title}
        </div>
        <div className="image">
          <img
            alt="game"
            src={this.props.game.image}
            height={300}
            width={200}
            onClick={() => this.props.handleShowPage(this.props.game.id)}
          />
        </div>
        <div className="game-text-container">
          <div className="genre">
            <strong>Genre: </strong>
            {this.props.game.genre}
          </div>
          <div className="year">
            <strong>Release Year: </strong>
            {this.props.game.year}
          </div>
        </div>
        {this.props.handleReview ? (
          <button onClick={() => this.props.handleReview(this.props.game)}>
            Show Review
          </button>
        ) : null}
        <button
          onClick={() => {
            this.props.addToFav(this.props.game)
          }}
        >
          Add/Remove Favs
        </button>
      </div>
    )
  }
}
