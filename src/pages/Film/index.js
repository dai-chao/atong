
import React,{Component} from "react"
import Header from "../../component/Header/Header"
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
                影院页
            </div>
        )
    }
}
export default Film