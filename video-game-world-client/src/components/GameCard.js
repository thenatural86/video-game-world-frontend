import React from "react"

const GameCard = props => {
  return (
    <div className="gameCardContainer" style={{ width: "200px" }}>
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
          onClick={props.clickHandler3}
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
      {props.clickHandler2 ? (
        <button onClick={() => props.clickHandler2(props.game)}>
          Show Review
        </button>
      ) : null}

      <button
        onClick={() => {
          props.clickHandler(props.game)
        }}
      >
        Add/Remove Favs
      </button>
    </div>
  )
}
export default GameCard
