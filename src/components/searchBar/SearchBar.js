import React, {Component} from 'react'
import NewsCard from './../newsCard/NewsCard'
import axios from 'axios'

const apiStart = "https://newsapi.org/v2/everything?q="
const apiEnd = "&apiKey=890966d216064af5975cc3819e586259"

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            userInput:"",
            searchArr:[]
        }
    }
        changeHandler(val){
            this.setState({userInput:val})
            console.log(this.state.userInput)
        }

        getNewHeadlines(){

            axios.get(apiStart+this.state.userInput+apiEnd).then((response)=>console.log(response))
        }
    

        render(){
            return(
                <div className="searchBar">
                <p id="obiwan">hello there...</p>
                    <input onChange={(e)=>this.changeHandler(e.target.value)} type="text" placeholder="Search Here..."/>
                    <button onClick={()=>this.getNewHeadlines()}>Submit</button>
                    <NewsCard/>
                </div>
            )
        }
    
}
export default SearchBar