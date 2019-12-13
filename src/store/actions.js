import { hotlist } from "../api/home";
export function getHotList({commit},option){
    return hotlist(option).then(data=>{
        console.log(data)
        commit('changeHotList',{
            oldType:option.oldType,
            newType:option.newType,
            data:data.data
        })
    })
}