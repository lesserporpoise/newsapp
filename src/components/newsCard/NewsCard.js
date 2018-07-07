import React,{Component} from 'react'



class NewsCard extends Component{
    constructor(props){
        super(props)
        this.state={
            propsArr:[]
        }
    }
    render(){
        console.log(this.props.data,"did props.data make it?")
        let titleArr=[];
        let urlArr=[];
        let imgArr=[];
        for(let i in this.props.data.articles){
        titleArr.push(this.props.data.articles[i].title)
        }
        for(let i in this.props.data.articles){
        urlArr.push(this.props.data.articles[i].url)
        }
        for(let i in this.props.data.articles){
        imgArr.push(this.props.data.articles[i].urlToImage)
        }
        console.log(titleArr,"titles")
        console.log(urlArr,"urls")
        console.log(imgArr,"imgs")
        return(
            <div className="newsCardHolder">
                <div class="renderOuter">
                    <div claass="renderInner">
                        {titleArr.map((val,i)=>
                        <div class="newsOuter">
                            <a href={urlArr[i]}><div key={i} class="imgHolder">
                            <img src={imgArr[i]} width="200" height="200"/>
                                <div class="titleHolder">
                                    <p>ID: {i+1}</p>
                                    <p>{titleArr[i]}</p>
                                </div>
                            </div></a>
                        </div>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsCard
    

