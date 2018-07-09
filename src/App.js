import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import Ranking from './components/ranking/Ranking'
import Footer from './components/footer/Footer'

class App extends Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className="master">
        <div className="appDivHeader">
          <Header/>
        </div>
        <div className="appDivSearch">
          <SearchBar/>
        </div>
        <div className="appDivRanking">
          <Ranking/>
        </div>
        <div className="appDivFooter">
          <Footer/>
        </div>
      </div>)}
  }




export default App;
