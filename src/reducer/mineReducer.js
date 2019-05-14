

let initMoney ={   //创建初始值
    title:"我的页"
};
let reducer = (state = initMoney,action)=>{    //创建   redux
    switch (action.type){
        case "W":state.title = "我的页" ; return {...state};
        case "N":state.title = "你的页" ; return {...state};
        default: return state
    }
};


export default reducer