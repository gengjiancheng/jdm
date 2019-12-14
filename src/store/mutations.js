export function changeHotList(state, option) {
    // 对于hotList 我们到底是整个替换 还是往上添加 ?
    //option newType oldType
<<<<<<< HEAD
    localStorage.setItem('hotList', JSON.stringify(option))
    if (option.newType == option.oldType) {
        console.log("进来了吗")
        state.hotList.push(...option)
    } else {
=======
    localStorage.setItem('hotList',JSON.stringify(option))
    console.log(123)
    if(option.newType == option.oldType){
        console.log("进来了吗")
        console.log(state.hotList)
        state.hotList = option;
    }else{
>>>>>>> 2006a20f3a1fb9be43916038d350124ad3e98bac
        state.hotList = option
    }
}