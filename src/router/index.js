

import React,{ Component } from "react"
import {HashRouter,Route,Switch} from "react-router-dom"

import Film from "../pages/Film"
import Cinema from "../pages/Cinema"
import Mine from "../pages/Mine"
import App from "../App";

class Router extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route  exact path="/" component={Film}/>
                        <Route path="/film"  render={()=>{
                            return (
                                <Film>
                                    <Route path="/film/re" component={()=>{
                                        return(
                                            <div>正在热映</div>
                                        )
                                    }}/>
                                    <Route path="/film/ji" component={()=>{
                                        return(
                                            <div>即将上映</div>
                                        )
                                    }}/>
                                </Film>
                            )
                        }}/>
                        <Route path="/cinema" component={Cinema}/>
                        <Route path="/mine" component={Mine}/>
                        <Route  component={()=>{
                            return(
                                <div>
                                    404
                                </div>
                            )
                        }}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default Router
















