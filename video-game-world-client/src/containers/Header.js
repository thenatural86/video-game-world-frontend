import React from "react"

class Header extends React.Component {
  render() {
    const headerContainer = {
      backgroundColor: "green",
      display: "flex",
      justifyContent: "space-evenly"
    }

    return (
      <div className="headerContainer" style={headerContainer}>
        <h1>Welcome to Video Game World</h1>
      </div>
    )
  }
}
export default Header
