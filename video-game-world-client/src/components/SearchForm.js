import React from "react"

export default class SearchForm extends React.Component {
  render() {
    return (
      <div
      // style={{
      //   display: "flex",
      //   justifyContent: "space-evenly"
      // }}
      >
        <h4>Search for a Game</h4>
        <input
          type="text"
          name="search"
          placeholder="search for game"
          value={this.props.value}
          onChange={e => this.props.searchChangeHandler(e.target.value)}
        />
      </div>
    )
  }
}
