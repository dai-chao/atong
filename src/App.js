
import React,{Component} from 'react';
import { Route,Link } from "react-router-dom"



import API from "./network/API"
import ajax from "./axios/axios"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
      this.state = {
            tabnav:[
                {title:"电影",to:"/film"},
                {title:"影院",to:"cinema"},
                {title:"我的",to:"mine"}
            ]
      }
  }



  render(){
      return(
         <div>
             <div>
                 {this.props.children}
             </div>
             <div className="foot-list">
                 <Link to="film">
                     <em  className="color" class="icon iconfont icon-dianying1"></em>
                     <p className="color">电影</p>
                 </Link>
                 <Link to="cinema">
                     <em className="color" class="icon iconfont icon-yingyuan"></em>
                     <p className="color">影院</p>
                 </Link>
                 <Link to="mine">
                     <em   className="color" class="icon iconfont icon-wode"></em>
                     <p className="color">我的</p>
                 </Link>
             </div>
         </div>
    )
  }
}

export default App;
