
import React,{Component} from 'react';
import { HashRouter as Router,Route,Link } from "react-router-dom"

import Film from "./pages/Film"
import Cinema from "./pages/Cinema"
import Mine from "./pages/Mine"

import API from "./network/API"
import ajax from "./axios/axios"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
      this.state = {
        name:"daichao"
      }
  }
  //   componentDidMount(){
  //       ajax(API.Download_Address)
  // }
  render(){
      //console.log(API);
      return(
          <Router>
              <div className="App">
                  <div>
                      <h1>内容</h1>

                          <Route path="/film" component={Film}/>
                          <Route path="/cinema" component={Cinema}/>
                          <Route path="/mine" component={Mine}/>

                  </div>
                  <div>
                      <Link to="/film">电影</Link>-----
                      <Link to="/cinema">影院</Link>-----
                      <Link to="mine">我的</Link>
                  </div>
              </div>
          </Router>
    )
  }
}

export default App;
