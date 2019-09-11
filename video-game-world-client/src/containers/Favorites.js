import React from "react"
import GameCard from "../components/GameCard"

export default class Favorites extends React.Component {
  render() {
    const favContainer = {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-evenly",
      alignContent: "flex-start",
      backgroundColor: "orange",
      width: "35%",
      borderRadius: "15px"
    }

    let game = this.props.favs.map(gameObj => {
      return (
        <GameCard
          key={gameObj.id}
          game={gameObj}
          clickHandler={this.props.clickHandler}
        />
      )
    })

    return (
      <div className="favContainer" style={favContainer}>
        <h1>I'm the Fav Container!</h1>
        {game}
      </div>
    )
  }
}
