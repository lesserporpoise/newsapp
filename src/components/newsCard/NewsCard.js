import React, {Component} from 'react'

class NewsCard extends Component{
    constructor(){
        super()
        this.state={
            userInput:""
        }
    }

        render(){
            return(
                <div className="NewsCard">
                    <input type="text" placeholder="Search Here..."/>
                </div>
            )
        }
    
}
export default NewsCard