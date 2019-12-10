import Classification from '../../components/Classification/classification.vue';
import hot from '../../components/Classification/hot.vue'
export default [{
    path: '/index/Classification',
    name: 'Classification',
    component: Classification,
    children:[
        {
            path:'/index/Classification/hot',
            name:'hot',
            component:hot
        }
    ]
}]