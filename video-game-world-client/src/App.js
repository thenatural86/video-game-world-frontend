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
    } else {
      let newArray = this.state.favs.filter(game => game !== gameObj)
      this.setState({ favs: newArray })
    }
  }

  render() {
    // console.log(this.handleReview)
    const containerStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      flexFlow: "wrap",
      width: "100%",
      backgroundColor: "#cddcff8c"
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
                    addToFav={this.addToFav}
                  />
                </div>
              )
            }}
          />
          <Route
            path="/favs"
            render={() => (
              <Favorites favs={this.state.favs} addToFav={this.addToFav} />
            )}
          />
          <Route
            path="/home"
            render={() => (
              <div style={containerStyle} className={"bodyCollection"}>
                <Header />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                  }}
                >
                  <GamesContainer addToFav={this.addToFav} />
                  <Favorites favs={this.state.favs} addToFav={this.addToFav} />
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
