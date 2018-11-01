import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import Search from './components/Search'

import './App.scss'

class App extends Component {
  state = { videos: [] }

  searchYoutube = term => {
    YTSearch({ key: process.env.REACT_APP_YOUTUBE_API_KEY, term }, videos => {
      this.setState({ videos })
      console.log(videos)
    })
  }

  render() {
    return (
      <div className="App">
        <Search searchYoutube={this.searchYoutube} title="Search on YouTube" />
      </div>
    )
  }
}

export default App
