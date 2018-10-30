import React, { Component } from 'react';
import logo from './logo.svg';
import  Search  from './components/Search';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search title="Search on YouTube" />
      </div>
    );
  }
}

export default App;
