import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
import "./App.css"
import Header from "./containers/Header"
import GamesContainer from "./containers/GamesContainer"
import Favorites from "./containers/Favorites"
import Navbar from "./components/NavBar"
import BadRoute from "./components/BadRoute"

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
    // console.log(this.handleReview)
    const containerStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      flexFlow: "wrap",
      width: "100%",
      backgroundColor: "lemonchiffon"
    }

    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/games"
            render={() => {
              return (
                <div>
                  <GamesContainer
                    games={this.state.games}
                    clickHandler={this.addToFav}
                  />
                </div>
              )
            }}
          />
          <Route
            path="/favs"
            render={() => (
              <Favorites
                favs={this.state.favs}
                clickHandler={this.removeFromFav}
              />
            )}
          />
          <Route
            path="/home"
            render={() => (
              <div style={containerStyle}>
                <Header />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <GamesContainer clickHandler={this.addToFav} />
                  <Favorites
                    favs={this.state.favs}
                    clickHandler={this.removeFromFav}
                  />
                </div>
              </div>
            )}
          />
          <Route component={BadRoute} />
        </Switch>
      </div>
    )
  }
}
