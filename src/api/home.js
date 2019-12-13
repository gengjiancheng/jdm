import http from './index'

export function hotlist(option){
    return http.get('/gtt',{
         params:option,
        //params:{
        //     category:'yule',
        //     reload:false,
        //     utm_source:null,
        //     count:8
        // }
    })
}