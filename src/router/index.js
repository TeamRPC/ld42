import Vue from 'vue'
import Router from 'vue-router'
import IntroArticle from '@/components/Articles/IntroArticle'
import ChamberArticle from '@/components/Articles/ChamberArticle'
import HallwayArticle from '@/components/Articles/HallwayArticle'
import PrivateIntro from '@/components/Articles/PrivateRocket/PrivateIntro'
import PrivateShoot from '@/components/Articles/PrivateRocket/PrivateShoot'
import PrivateDecisionOne from '@/components/Articles/PrivateRocket/PrivateDecisionOne'
import PrivateDecisionTwo from '@/components/Articles/PrivateRocket/PrivateDecisionTwo'

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
    },
    {
      path: '/private',
      components: {
        default: PrivateIntro,
        content: PrivateIntro
      }
    },
    {
      path: '/private-shoot',
      components: {
        default: PrivateShoot,
        content: PrivateShoot
      }
    },
    { path: '/private-decision-1',
      components: {
        default: PrivateDecisionOne,
        content: PrivateDecisionOne
      }
    },
    {
      path: '/private-decision-2',
      components: {
        default: PrivateDecisionTwo,
        content: PrivateDecisionTwo
      }
    }
  ]
})
