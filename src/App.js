import React,{Component} from 'react';
import logo from './logo.svg';
import API from "./network/API"
import ajax from "./axios/axios"
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        name:"daichao"
      }
  }
    componentDidMount(){
        ajax(API.Download_Address)
  }
  render(){
      console.log(API);
      return(
        <div className="App">
          <h1>hello</h1>
        </div>
    )
  }
}

export default App;
