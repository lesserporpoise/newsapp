import React, {Component} from 'react';
import axios from 'axios';
let serverUrl='localhost:3501/api/scores'

class Ranking extends Component{
    constructor(){
        super()
        this.state={
            scoreArr:[]
          }
    }
    getScoresArr(){
        axios.get(serverUrl).then((response)=>this.setState({scoreArr:response}))
    }

    render(){
        return(
            <button onClick={this.getScoresArr()}>Larry{console.log(this.scoreArr)}</button>
        )}
}
export default Ranking