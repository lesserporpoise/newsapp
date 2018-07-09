import React,{Component} from 'react'



class NewsCard extends Component{
    constructor(props){
        super(props)
        this.state={
            propsArr:[]
        }
    }
    render(){
        return(
                <div>
                    {console.log(this.props.index)}
                        <div key={"a"+this.props.index} className="newsOuter">
                            <a href={this.props.url} target="_blank"><div key={"b"+this.props.index} className="imgHolder">
                            <img key={"c"+this.props.index}  src={this.props.img} />
                                <div key={"d"+this.props.index} className="textHolder">
                                    <p key={"e"+this.props.index} id="newsText">{this.props.index+1}</p><br/>
                                    <p key={"f"+this.props.index} id="newsText">{this.props.title}</p>
                                </div>
                            </div></a>
                        </div>
                    </div>
        )
    }
}

export default NewsCard
    

