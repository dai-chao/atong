
import React,{Component} from "react"
import Header from "../../component/Header/Header"
import { Link,Route } from "react-router-dom"
// import ajax from "../../axios/axios"
import axios from "axios"
import "./index.css"

class Film extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"猫眼电影"
        }
    }

componentDidMount(){
       // axios.get("/ajax/movieOnInfoList?token=")
       //     .then(function (response) {
       //         console.log(response);
       //     })
       //     .catch(function (error) {
       //         console.log(error);
       //     });
}

    render(){
        return(
            <div className="film">
                <Header title={ this.state.title }/>
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