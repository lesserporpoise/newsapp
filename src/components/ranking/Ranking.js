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
        this.setState({scoreArr:response.data})}).catch((err)=>console.log(err))
    }
    deleteScore(){
        let reqID = this.state.idInput;
        axios.delete(serverUrl+"/"+reqID).then((response)=>{this.setState({scoreArr:response.data})}).catch((err)=>console.log(err))
        
    }

    render(){
        return(
        <div className="rankingMain">
            <div className="rankingSub1">
                <div className="getMain">
                    <button onClick={()=>this.getScoresArr()}>See Scores</button>
                    <p>{JSON.stringify(this.state.scoreArr)}</p>
                </div>
            </div>
            <div className="rankingSub2">
                <div className="postMain">
                    <h3>Don't Use this... seriously</h3>
                    <input placeholder="Score" type="number" min="0" max="5" onChange={(e)=>this.changeHandler(e.target.value)}/>
                    <button onClick={()=>this.addToScoresArr()}>Make New Scores... Just 'cause</button>
                </div>
                <div className="deleteMain">
                    <h3>Update or Delete Scores</h3>
                    <input placeholder="Score" type="number" min="0" max="5" onChange={(e)=>this.changeHandler(e.target.value)}/>
                    <input placeholder="ID" onChange={(e)=>this.idChangeHandler(e.target.value)}/>
                    <button onClick={()=>this.updateScoresArr()}>UpDaTe!</button>
                    <button onClick={()=>this.deleteScore()}>DeLeTe!</button>
                </div>
            </div>
        </div>
        )}
}
export default Ranking