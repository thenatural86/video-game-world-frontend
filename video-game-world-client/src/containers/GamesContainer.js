import React from "react"
import GameCard from "../components/GameCard"
import AddForm from "../components/AddForm"
import SearchForm from "../components/SearchForm"

export default class GamesContainer extends React.Component {
  state = { games: [], searchTerm: "" }

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

  searchChangeHandler = searchTerm => {
    this.setState({ searchTerm: searchTerm })
  }

  filterGames = () => {
    let newGames = this.state.games.filter(game =>
      game.title
        .toLowerCase()
        .includes(this.state.searchTerm.toLocaleLowerCase())
    )
    return newGames
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

    let game = this.filterGames().map(gameObj => {
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
        <SearchForm
          value={this.state.searchTerm}
          changeHandler={this.searchChangeHandler}
        />
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
