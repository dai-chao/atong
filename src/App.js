
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
                 <Link to="film">电影</Link>
                 <Link to="cinema">影院</Link>
                 <Link to="mine">我的</Link>
             </div>
         </div>
    )
  }
}

export default App;
