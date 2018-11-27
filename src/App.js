import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import Search from './components/Search'
import Card from './components/Card'
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
    let { videos } = this.state
    return (
      <div className="container">
        <div className="row">
          <Search
            searchYoutube={this.searchYoutube}
            title="Search on YouTube"
          />
        </div>
        <div className="row">
          {videos.map(video => (
            <Card
              key={video.id.videoId}
              buttonLink={`https://youtu.be/${video.id.videoId}`}
              buttonText={'watch this tight ass video dude'}
              title={video.snippet.title}
              description={video.snippet.description}
              videoId={video.id.videoId}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
