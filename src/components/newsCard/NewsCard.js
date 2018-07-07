import React, {Component} from 'react'
import axios from 'axios'

const newsUrl = 'https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=890966d216064af5975cc3819e586259'

class NewsCard extends Component{
    constructor(){
      super()
      this.state={
        articles: {},
        stuff:[],
        urls:[],
        imgArr:[]
      }
    }
  
    componentDidMount(){
      axios.get(newsUrl).then((response)=>{
      this.setState({articles:response.data.articles[1].title})
      console.log(response)
      let myArticles = []
      let myUrls=[]
      let urlImgArr=[]
  
      for(let i in response.data.articles)
      {myArticles.push(response.data.articles[i].title);
      myUrls.push(response.data.articles[i].url);
        urlImgArr.push(response.data.articles[i].urlToImage)}
  
      this.setState({
        stuff:myArticles,
        urls:myUrls,
        imgArr:urlImgArr

      })
      })
    }

        render(){
            return(
                <div className="newsCardHolder">
                    <div className="contentBox">
                        {this.state.stuff.map((article,i)=>(
                        <div className="mappedBoxes" >
                            <img id="news" width="120" height="80" src={this.state.imgArr[i]}/>
                            <div className="tagHolder">
                                <h5>ID: {i+1}</h5>
                            </div>
                            <a href={this.state.urls[i]}>
                        <div className="newsBox" key ={i}>{article}</div>
                        </a></div>
                        ))}
                    </div>
                </div>
            )
        }
    
}
export default NewsCard