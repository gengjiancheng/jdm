export function changeHotList(state,option){
    // 对于hotList 我们到底是整个替换 还是往上添加 ?
    //option newType oldType
    if(option.newType == option.oldType){
        state.hotList.push(...option.data)
    }else{
        state.hotList = option.data
    }
     
}