import React from "react"

const GameCard = props => {
  // let review = props.game.reviews.map(reviewObj => {
  //   return reviewObj.content
  // })

  return (
    <div className="gameCardContainer">
      {/* <div>{review}</div> */}
      <div className="title">
        <strong>Title: </strong>
        {props.game.title}
      </div>
      <div className="image">
        <img
          alt="game"
          src={props.game.image}
          height={300}
          width={200}
          onClick={() => {
            props.clickHandler(props.game)
          }}
        />
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
      {/* if gamecard is in favorites don't render button */}
      <button onClick={() => props.clickHandler2(props.game)}>
        Show Review
      </button>
    </div>
  )
}
export default GameCard
