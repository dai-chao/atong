

let initMoney ={   //创建初始值
    money:1000
};
 let reducer = (state = initMoney,action)=>{    //创建   redux
    switch (action.type){
        case "ADD":state.money ++ ; return {...state};
        case "DEL":state.money -- ; return {...state};
        default: return state
    }
};


 export default reducer
