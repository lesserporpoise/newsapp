import React, {Component} from 'react'

class SearchBar extends Component{
    constructor(){
        super()
        this.state={
            userInput:""
        }
    }

        render(){
            return(
                <div className="searchBar">
                    <input type="text" placeholder="Search Here..."/>
                </div>
            )
        }
    
}
export default SearchBar