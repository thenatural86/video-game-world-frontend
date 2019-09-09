import React, { Component } from "react"
// import logo from "./logo.svg"
import "./App.css"
import Header from "./containers/Header"
import GamesContainer from "./containers/GamesContainer"
import Favorites from "./containers/Favorites"
export default class App extends Component {
  state = { favs: [] }

  addToFav = gameObj => {
    if (!this.state.favs.includes(gameObj)) {
      let newArray = [...this.state.favs, gameObj]
      this.setState({ favs: newArray })
    }
  }

  removeFromFav = gameObj => {
    let newArray = this.state.favs.filter(game => game !== gameObj)
    this.setState({ favs: newArray })
  }

  render() {
    const containerStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      flexFlow: "wrap",
      width: "100%"
    }

    return (
      <div>
        <div>
          <Header header={this.props.header} />
        </div>
        <div className="containers" style={containerStyle}>
          <GamesContainer
            games={this.state.games}
            clickHandler={this.addToFav}
          />
          <Favorites favs={this.state.favs} clickHandler={this.removeFromFav} />
        </div>
      </div>
    )
  }
}
