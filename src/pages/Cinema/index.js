
import React,{Component} from "react"
import Header from "../../component/Header/Header"
import "./index.css"

class Cinema extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"影院"
        }
    }
    render(){
        return(
            <div className="cinema">
                <Header title={this.state.title}/>
                影院页
            </div>
        )
    }
}
export default Cinema