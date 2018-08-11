import Vue from 'vue'
import Router from 'vue-router'
import IntroArticle from '@/components/Articles/IntroArticle'
import ChamberArticle from '@/components/Articles/ChamberArticle'
import HallwayArticle from '@/components/Articles/HallwayArticle'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: IntroArticle,
        content: IntroArticle
      }
    },
    {
      path: '/game',
      components: {
        default: ChamberArticle,
        content: ChamberArticle
      }
    },
    {
      path: '/hallway',
      components: {
        default: HallwayArticle,
        content: HallwayArticle
      }
    }
  ]
})
