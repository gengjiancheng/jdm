import Find from '../../components/Find/find.vue'
import Follow from '../../components/Find/follow.vue'
import Broadcast from '../../components/Find/broadcast.vue'

export default [{
    path: '/index/Find',
    name: 'Find',
    component: Find,
    redirect: '/index/Find/Follow',
    children: [{
            path: '/index/Find/Follow',
            name: 'Follow',
            component: Follow
        },
        {
            path: '/index/Find/Broadcast',
            name: 'Broadcast',
            component: Broadcast
        },

    ]
}]