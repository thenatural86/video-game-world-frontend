import React from "react"
import GameCard from "../components/GameCard"
import AddForm from "../components/AddForm"
import SearchForm from "../components/SearchForm"
import ReviewContainer from "./ReviewContainer"
import ShowPage from "../components/ShowPage"

export default class GamesContainer extends React.Component {
  state = { games: [], searchTerm: "", reviews: [], show: false }

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

  handleShowPage = () => {
    console.log("click")
    // {image is clicked ? render ShowPage component : render welcome route}
    this.setState({ show: !this.state.show })

    console.log(this.state.show)
  }

  render() {
    // console.log(this.state)
    const containerStyle = {
      backgroundColor: "cyan",
      display: "flex",
      flexFlow: "wrap",
      justifyContent: "space-evenly",
      alignContent: "flex-start",
      width: "45%",
      borderRadius: "15px"
    }

    let games = this.filterGames().map(gameObj => {
      return (
        <GameCard
          key={gameObj.id}
          game={gameObj}
          clickHandler={this.props.clickHandler}
          clickHandler2={this.handleReview}
          clickHandler3={this.handleShowPage}
        />
      )
    })
    console.log(games)
    return (
      <div style={containerStyle} className="gamesCollection">
        <ReviewContainer
          reviews={this.state.reviews}
          submitHandler={this.addToReview}
        />
        <SearchForm
          value={this.state.searchTerm}
          changeHandler={this.searchChangeHandler}
        />
        <AddForm submitHandler={this.addToGames} />
        {games}

        {this.state.show ? <ShowPage games={this.state.games} /> : null}
      </div>
    )
  }
}
