import React from "react"

export default class SearchForm extends React.Component {
  render() {
    return (
      <div>
        <h4>Search for a Game here</h4>
        <input
          type="text"
          name="search"
          placeholder="search for game"
          value={this.props.value}
          onChange={e => this.props.changeHandler(e.target.value)}
        />
      </div>
    )
  }
}
