import Vue from 'vue'
import Router from 'vue-router'
import IntroArticle from '@/components/Articles/IntroArticle'
import ChamberArticle from '@/components/Articles/ChamberArticle'
import HallwayArticle from '@/components/Articles/HallwayArticle'
import PrivateIntro from '@/components/Articles/PrivateRocket/PrivateIntro'
import PrivateShoot from '@/components/Articles/PrivateRocket/PrivateShoot'
import PrivateDecisionOne from '@/components/Articles/PrivateRocket/PrivateDecisionOne'
import PrivateDecisionTwo from '@/components/Articles/PrivateRocket/PrivateDecisionTwo'
import PrivateResultShoot from '@/components/Articles/PrivateRocket/PrivateResultShoot'
import PrivateResultIgnore from '@/components/Articles/PrivateRocket/PrivateResultIgnore'
import PrivateResultHail from '@/components/Articles/PrivateRocket/PrivateResultHail'
import PrivateResultAttack from '@/components/Articles/PrivateRocket/PrivateResultAttack'
import PrivateResultLeave from '@/components/Articles/PrivateRocket/PrivateResultLeave'
import PrivateResultAllow from '@/components/Articles/PrivateRocket/PrivateResultAllow'

import PopIntro from '@/components/Articles/PopulationLimit/PopIntro'
import PopShoot from '@/components/Articles/PopulationLimit/PopShoot'
import PopDecisionOne from '@/components/Articles/PopulationLimit/PopDecisionOne'
import PopDecisionTwo from '@/components/Articles/PopulationLimit/PopDecisionTwo'
import PopResultShoot from '@/components/Articles/PopulationLimit/PopResultShoot'
import PopResultIgnore from '@/components/Articles/PopulationLimit/PopResultIgnore'
import PopResultHail from '@/components/Articles/PopulationLimit/PopResultHail'
import PopResultAttack from '@/components/Articles/PopulationLimit/PopResultAttack'
import PopResultLeave from '@/components/Articles/PopulationLimit/PopResultLeave'
import PopResultAllow from '@/components/Articles/PopulationLimit/PopResultAllow'


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
    },
    {
      path: '/private-result-shoot',
      components: {
        default: PrivateResultShoot,
        content: PrivateResultShoot
      }
    },
    {
      path: '/private-result-ignore',
      components: {
        default: PrivateResultIgnore,
        content: PrivateResultIgnore
      }
    },
    {
      path: '/private-result-hail',
      components: {
        default: PrivateResultHail,
        content: PrivateResultHail
      }
    },
    {
      path: '/private-result-attack',
      components: {
        default: PrivateResultAttack,
        content: PrivateResultAttack
      }
    },
    {
      path: '/private-result-leave',
      components: {
        default: PrivateResultLeave,
        content: PrivateResultLeave
      }
    },
    {
      path: '/private-result-allow',
      components: {
        default: PrivateResultAllow,
        content: PrivateResultAllow
      }
    },
    {
      path: '/pop',
      components: {
        default: PopIntro,
        content: PopIntro
      }
    },
    {
      path: '/pop-shoot',
      components: {
        default: PopShoot,
        content: PopShoot
      }
    },
    { path: '/pop-decision-1',
      components: {
        default: PopDecisionOne,
        content: PopDecisionOne
      }
    },
    {
      path: '/pop-decision-2',
      components: {
        default: PopDecisionTwo,
        content: PopDecisionTwo
      }
    },
    {
      path: '/pop-result-shoot',
      components: {
        default: PopResultShoot,
        content: PopResultShoot
      }
    },
    {
      path: '/pop-result-ignore',
      components: {
        default: PopResultIgnore,
        content: PopResultIgnore
      }
    },
    {
      path: '/pop-result-hail',
      components: {
        default: PopResultHail,
        content: PopResultHail
      }
    },
    {
      path: '/pop-result-attack',
      components: {
        default: PopResultAttack,
        content: PopResultAttack
      }
    },
    {
      path: '/pop-result-leave',
      components: {
        default: PopResultLeave,
        content: PopResultLeave
      }
    },
    {
      path: '/pop-result-allow',
      components: {
        default: PopResultAllow,
        content: PopResultAllow
      }
    }
  ]
})
