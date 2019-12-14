let hotList = JSON.parse(localStorage.getItem('hotList'))
console.log(hotList)
export default {
    hotList:hotList || []
}