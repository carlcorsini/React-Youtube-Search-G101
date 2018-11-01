import React, { Component } from 'react';

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
  state = {}

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this is where I would call the prop
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="searchTerm" onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-primary">
              Search
            </button>
          </div>  
        </form>
      </div>
    );
  }
}

export default Search;


