import React from "react"

const GameCard = props => {
  // console.log(props)

  return (
    <div
      className="gameCardContainer"
      onClick={() => props.clickHandler(props.game)}
    >
      <div className="title">
        <strong>Title: </strong>
        {props.game.title}
      </div>
      <div className="image">
        <img alt="game" src={props.game.image} height={300} width={300} />
      </div>
      <div className="game-text-container">
        <div className="genre">
          <strong>Genre: </strong>
          {props.game.genre}
        </div>
        <div className="year">
          <strong>Release Year: </strong>
          {props.game.year}
        </div>
      </div>
    </div>
  )
}
export default GameCard
