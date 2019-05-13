
import React,{Component} from "react"
import Header from "../../component/Header/Header"
import { createStore } from "redux"
import "./index.css"

//console.log(createStore);

let initMoney ={
    money:1000
};
let reducer =  function(state=initMoney,action){
    switch (action.type){
        case "ADD":state.money ++ ; return {...state};
        case "DEL":state.money -- ; return {...state};
        default: return state
    }
};
let store = createStore(reducer);
console.log(store.getState().money);
class Home extends Component{
    constructor(props){
        super(props)

    }
    render(){

        return(
            <div>
                {store.getState().money}
            </div>
        )
    }
}

class Cinema extends Component{
    constructor(props){
        super(props);
        this.state={
            title:"影院",
            money:1000
        }
    }
    addChange(){

        store.dispatch({
            type:'ADD'
        });
        console.log(store.getState().money);
    }
    delChange(){

        store.dispatch({
            type:'DEL'
        });
        console.log(store.getState().money);
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                money:store.getState().money
            })
        })
    }

    render(){
        return(
            <div className="cinema">
                <Header title={this.state.title}/>
                <h1>影院页</h1>
                <button onClick={this.addChange.bind(this)}>ADD</button>------------------------
                <button onClick={this.delChange.bind(this)}>DEL</button>
                <Home/>
            </div>
        )
    }
}
export default Cinema