import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Ranking from './components/ranking/Ranking'

let serverUrl='/api/headlines'
let newsUrl = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=890966d216064af5975cc3819e586259'

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
