

import React,{Component} from "react"
import Header from "../../component/Header/Header"
import "./index.css"

class Mine extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"我的"
        }
    }
    render(){
        return(
            <div className="mine">
                <Header title={this.state.title}/>
                我的页
            </div>
        )
    }
}
export default Mine