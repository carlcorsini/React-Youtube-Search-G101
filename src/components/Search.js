import React, { Component } from 'react'

/**
 * Search component to start looking for Youtube videos.
 *
 * @class Search
 * @extends {Component}
 *
 * Get input to work by setting state
 * Show state value being updated in real time on page
 * Remove constructor and update handleChange **STRETCH GOAL**
 */

class Search extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  state = {
    searchTerm: ''
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.searchYoutube(this.state.searchTerm)
  }

  render() {
    const { title } = this.props
    const { searchTerm } = this.state

    return (
      <div>
        <h1>{title}</h1>

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Submit</button>
        </form>

        <p>{searchTerm}</p>
      </div>
    )
  }
}

export default Search
