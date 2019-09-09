import React from "react"
import GameCard from "../components/GameCard"
import AddForm from "../components/AddForm"
export default class GamesContainer extends React.Component {
  state = { games: [] }

  componentDidMount() {
    fetch("http://localhost:3000/games")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ games: data })
      })
  }

  addToGames = gameObj => {
    this.setState({ games: [gameObj, ...this.state.games] })
  }

  render() {
    const containerStyle = {
      backgroundColor: "cyan",
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-evenly",
      width: "45%",
      borderRadius: "15px"
    }

    let game = this.state.games.map(gameObj => {
      return (
        <GameCard
          key={gameObj.id}
          game={gameObj}
          clickHandler={this.props.clickHandler}
        />
      )
    })

    return (
      <div style={containerStyle} className="gamesCollection">
        <AddForm submitHandler={this.addToGames} />
        {game}
      </div>
    )
  }
}

// return (
//   <div className="game-container" style={gameContainer}>
//     <GamesCollection
//       games={this.state.games}
//       clickHandler={this.addToFav}
//     />
//     {/* <FavoritesCollection
//       favs={this.state.favs}
//       clickHandler={this.removeFromFav}
//     /> */}
//   </div>
// )
