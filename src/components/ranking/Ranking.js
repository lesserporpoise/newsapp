import React, {Component} from 'react';
import axios from 'axios';
let serverUrl='/api/scores'

class Ranking extends Component{
    constructor(){
        super()
        this.state={
            scoreArr:[],
            userInput:"",
            idInput:""
          }
    }
    getScoresArr(){
        console.log("Get ScoreArr")
        axios.get(serverUrl).then((response)=>{this.setState({scoreArr:response.data})}).catch((err)=>console.log(err))
    }

    changeHandler(val){
        this.setState({userInput:val})
    }

    idChangeHandler(val){
        this.setState({idInput:val})
    }

    addToScoresArr(){
        axios.post(serverUrl,{score:this.state.userInput}).then((response)=>{
        this.setState({scoreArr:response.data})}).catch((err)=>console.log(err))
    }

    updateScoresArr(){
        console.log(this.state.idInput)
        let reqID = this.state.idInput;
        axios.put(serverUrl+"/"+reqID,{score:this.state.userInput}).then((response)=>{
        this.setState({scoreArr:response.data});console.log(response.data)}).catch((err)=>console.log(err))
    }
    deleteScore(){
        let reqID = this.state.idInput;
        axios.delete(serverUrl+"/"+reqID).then((response)=>{this.setState({scoreArr:response.data})}).catch((err)=>console.log(err))
        
    }

    render(){
        console.log(this.state,"ranking states")
        return(
        <div>
             <button onClick={()=>this.getScoresArr()}>See Scores</button>
             <div><p>{JSON.stringify(this.state.scoreArr)}</p></div>
             <h3>Don't Use this... seriously</h3>
             <input placeholder="Score" type="number" min="0" max="5" onChange={(e)=>this.changeHandler(e.target.value)}/>
             <button onClick={()=>this.addToScoresArr()}>Make New Scores... Just 'cause</button>
             <h3>Update or Delete Scores</h3>
             <input placeholder="Score" type="number" min="0" max="5" onChange={(e)=>this.changeHandler(e.target.value)}/>
             <input placeholder="ID" onChange={(e)=>this.idChangeHandler(e.target.value)}/>
             <button onClick={()=>this.updateScoresArr()}>UpDaTe!</button>
             <button onClick={()=>this.deleteScore()}>DeLeTe!</button>
        </div>
        )}
}
export default Ranking