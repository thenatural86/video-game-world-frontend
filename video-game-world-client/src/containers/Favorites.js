import React from "react"
import GameCard from "../components/GameCard"
// import Favorites from './Favorites';

export default class Favorites extends React.Component {
  render() {
    const favContainer = {
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-evenly",
      alignContent: "flex-start",
      backgroundColor: "#6eff007a",
      width: "100%",
      borderRadius: "15px"
    }

    let game = this.props.favs.map(gameObj => {
      return (
        <GameCard
          key={gameObj.id}
          game={gameObj}
          addToFav={this.props.addToFav}
        />
      )
    })

    return (
      <div className="favContainer" style={favContainer}>
        <h1>Your Favorite Games!</h1>
        {game}
      </div>
    )
  }
}
