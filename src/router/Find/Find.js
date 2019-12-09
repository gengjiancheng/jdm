import Find from '../../components/Find/find.vue'
import Follow from '../../components/Find/follow.vue'
import Bask from '../../components/Find/bask.vue'
import Jing from '../../components/Find/jing.vue'
import Five from '../../components/Find/five.vue'
import Broadcast from '../../components/Find/broadcast.vue'
import Video from '../../components/Find/video.vue'

export default [{
    path: '/index/Find',
    name: 'Find',
    component: Find,
    children: [{
            path: '/index/Find/Follow',
            name: 'Follow',
            component: Follow
        },
        {
            path: '/index/Find/Bask',
            name: 'Bask',
            component: Bask
        },
        {
            path: '/index/Find/Jing',
            name: 'Jing',
            component: Jing
        },
        {
            path: '/index/Find/Five',
            name: 'Five',
            component: Five
        },
        {
            path: '/index/Find/Broadcast',
            name: 'Broadcast',
            component: Broadcast
        },
        {
            path: '/index/Find/Video',
            name: 'Video',
            component: Video
        }
    ]
}]