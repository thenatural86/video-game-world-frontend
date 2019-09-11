import React from "react"
import GameCard from "./GameCard"

export default class ShowPage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor: "white",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          opacity: ".8",
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
            borderRadius: "15px"
          }}
        ></div>
        {/* <h2>Show Page</h2> */}
        {/* div with position fixed, width height 100vh vw  transparent, flex outer div, justify center, event listener on outer div*/}
      </div>
    )
  }
}
