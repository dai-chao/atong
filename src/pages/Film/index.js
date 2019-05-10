
import React,{Component} from "react"
import Header from "../../component/Header/Header"
import {Link,Route} from "react-router-dom"
import "./index.css"

class Film extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"猫眼电影"
        }
    }
    render(){
        return(
            <div className="film">
                <Header title={this.state.title}/>
                <Link to="/film/re">正在热映</Link>
                <Link to="/film/ji">即将上映</Link>
                <div>
                    {
                        this.props.children
                    }
                </div>

            </div>
        )
    }
}
export default Film