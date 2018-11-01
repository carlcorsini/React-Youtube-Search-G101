import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import  Search  from './components/Search';
import Card from './components/Card';

import './App.scss';
require('dotenv').config();

class App extends Component {

  state = {
    videos: []
  }

  searchYoutube = (term) => {
    YTSearch({ key: process.env.REACT_APP_YOUTUBE_API_KEY, term}, (videos) => {
      this.setState({ videos })
      console.log(videos);
    });
  }

  render() {
    let { videos } = this.state;
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">
            React Youtube Search
          </h1>  
          <p className="lead">
            We will be creating a youtube search using React
          </p>
          <hr className="my-4"/>
          <Search onSubmit={this.searchYoutube} />
        </div>
        <div className="row">
        {videos.map(video => {
          return (
              <Card 
                key={video.etag}
                title={video.snippet.title} 
                videoId={video.id.videoId} 
                description={video.snippet.description} 
                buttonLink={`https://youtu.be/${video.id.videoId}`}
                buttonText={"Watch Video on Youtube"}
              />
          )
        })}
        </div>
      </div>  
    );
  }
}

export default App;
