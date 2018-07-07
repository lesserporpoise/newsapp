import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Ranking from './components/ranking/Ranking'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="master">
        <Header/>
        <SearchBar/>
        <Ranking/>
      </div>)}
  }




export default App;
