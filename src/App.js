import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Header from './components/header/Header'
import SearchBar from './components/searchBar/SearchBar'
import NewsCard from './components/newsCard/NewsCard'
import Ranking from './components/ranking/Ranking'

let serverUrl='/api/headlines'
let newsUrl = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=890966d216064af5975cc3819e586259'

class App extends Component{
  constructor(){
    super()
    this.state={
      articles: {},
      stuff:[],
      urls:[]
    }
  }

  componentDidMount(){
    axios.get(newsUrl).then((response)=>{
    this.setState({articles:response.data.articles[1].title})
    let myArticles = []
    let myUrls=[]

    for(let i in response.data.articles)
    {myArticles.push(response.data.articles[i].title);
    myUrls.push(response.data.articles[i].url)}

    this.setState({
      stuff:myArticles,
      urls:myUrls
    })
    })
  }
  


  render(){
    return (
      <div>
        <Header/>
        <SearchBar/>
          <div className="contentBox">
            {this.state.stuff.map((article,i)=>(
            <a href={this.state.urls[i]}>
              <div className="newsBox" key ={i}>{article}</div>
            </a>
            ))}
          </div>
        <NewsCard/>
        <Ranking/>
      </div>)}
  }




export default App;
