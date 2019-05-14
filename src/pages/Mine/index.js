

import React,{Component} from "react"
import Header from "../../component/Header/Header"
import store from "../../store/index"
import "./index.css"


console.log(store.getState());

class Mine extends Component{
    constructor(props){
        super(props);
    }

    wwwchange(){
        console.log(1);
        store.dispatch({
            type:'W'
        });
    }
    nnnchange(){
        console.log(2);
        store.dispatch({
            type:'N'
        });
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                title:store.getState().mineReducer.title
            });

        });
    }
    render(){
        return(
            <div className="mine">
                <Header title={store.getState().mineReducer.title}/>
                {store.getState().mineReducer.title}
                <br/>
                <button onClick={this.wwwchange.bind(this)}>点击我的页</button>
                <br/>
                <button onClick={this.nnnchange.bind(this)}>点击你的页</button>
            </div>
        )
    }
}
export default Mine