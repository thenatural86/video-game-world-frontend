import React from "react"
import GameCard from "../components/GameCard"
import AddForm from "../components/AddForm"
import SearchForm from "../components/SearchForm"
import ReviewContainer from "./ReviewContainer"
import ShowPage from "../components/ShowPage"

export default class GamesContainer extends React.Component {
  state = { games: [], searchTerm: "", reviews: [], show: false, gameShow: [] }

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

  handleReview = reviewObj => {
    let game = this.state.games.find(game => game.id === reviewObj.id)
    let gameReview = game.reviews.map(content => {
      return content.content
    })
    this.setState({ reviews: gameReview })
  }

  addToReview = reviewObj => {
    this.setState({ reviews: [reviewObj, ...this.state.reviews] })
  }

  handleShowPage = gameId => {
    let game = this.state.games.find(game => game.id === gameId)
    this.setState({ show: !this.state.show, gameShow: game })
  }

  render() {
    const containerStyle = {
      backgroundColor: "cyan",
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-evenly",
      alignContent: "flex-start",
      width: "70%",
      borderRadius: "15px"
    }

    let games = this.filterGames().map(gameObj => {
      return (
        <GameCard
          key={gameObj.id}
          game={gameObj}
          addToFav={this.props.addToFav}
          handleReview={this.handleReview}
          handleShowPage={this.handleShowPage}
        />
      )
    })
    return (
      <div>
        <div style={containerStyle} className="gamesCollection">
          <ReviewContainer
            reviews={this.state.reviews}
            addToReview={this.addToReview}
          />
          <SearchForm
            value={this.state.searchTerm}
            searchChangeHandler={this.searchChangeHandler}
          />
          <AddForm addToGames={this.addToGames} />
          {games}
          {this.state.show ? (
            <ShowPage
              games={this.state.gameShow}
              handleShowPage={this.handleShowPage}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

// add state of shown game, clickHandler takes gameObj, setting state to true and showing called game
