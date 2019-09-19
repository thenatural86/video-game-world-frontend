import React from "react"
// import GameCard from "./GameCard"

export default class ShowPage extends React.Component {
  render() {
    console.log(this.props.games.reviews)
    let review = this.props.games.reviews.map(game => {
      console.log(game.content)
      return game.content
    })

    return (
      <div
        onClick={() => {
          this.props.handleShowPage(this.props)
        }}
        style={{
          position: "fixed",
          backgroundColor: "white",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          opacity: ".9",
          left: "2px"
        }}
      >
        <div
          style={{
            position: "fixed",
            backgroundColor: "darkslateblue",
            height: "70vh",
            width: "50vw",
            justifyContent: "center",
            marginLeft: "25vw",
            marginTop: "5vh",
            borderRadius: "15px",
            zIndex: "-1",
            alignItems: "center"
          }}
        >
          <div>
            <div className={"showPageImage"}>
              <img
                alt="hello"
                src={this.props.games.image}
                height={300}
                width={200}
                style={{
                  display: "flex",
                  flexFlow: "wrap",
                  justifyContent: "center",
                  margin: "auto",
                  zIndex: "9",
                  border: "10px solid red"
                }}
              />
              <div style={{ fontWeight: "bold", margin: "auto" }}>
                <div>Title: {this.props.games.title}</div>
                <div>Genre: {this.props.games.genre}</div>
                <div>Release Year: {this.props.games.year}</div>
                <div>Game Review: {review}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
