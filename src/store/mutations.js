export function changeHotList(state, option) {
    // 对于hotList 我们到底是整个替换 还是往上添加 ?
    //option newType oldType
    localStorage.setItem('hotList',JSON.stringify(option))
    console.log(123)
    if(option.newType == option.oldType){
        console.log("进来了吗")
        console.log(state.hotList)
        state.hotList = option;
    }else{
        state.hotList = option
    }
}