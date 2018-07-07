import React, {Component} from 'react'
import NewsCard from './../newsCard/NewsCard'
import axios from 'axios'

const apiStart = "https://newsapi.org/v2/everything?q="
const apiEnd = "&apiKey=890966d216064af5975cc3819e586259"
const newsUrl = 'https://newsapi.org/v2/top-headlines?' +
                'country=us&' +
                'apiKey=890966d216064af5975cc3819e586259'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            data:{},
            articles:[],
            stuff:[],
            urls:[],
            imgArr:[],
            userInput:"",
            searchArr:[],
        }
        
    }

    componentDidMount(){
        axios.get(newsUrl).then((response)=>{
        this.setState({data:response.data})
        })
      }

        changeHandler(val){
            this.setState({userInput:val})
        }



        getNewHeadlines(){
        axios.get(apiStart+this.state.userInput+apiEnd).then((response)=>{
        this.setState({data:response.data})
                })
        }
    ///// on mount, we get a default 20 images put on state. on call, the new headlines function gives a new 20 images
    ///// that are overwritten on to state. this should allow me to just pass props of state, and things should work?

        render(){
            return(
                <div className="searchBar">
                <p id="obiwan">hello there...</p>
                    <input onChange={(e)=>this.changeHandler(e.target.value)} type="text" placeholder="Search Here..."/>
                    <button onClick={()=>{this.getNewHeadlines()}}>SuBmIt</button>
                    <NewsCard data={this.state.data}/>
                </div>
            )
        }
    
    }
export default SearchBar