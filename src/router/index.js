import Vue from 'vue'
import Router from 'vue-router'
import IntroArticle from '@/components/Articles/IntroArticle'
import PrivateIntro from '@/components/Articles/PrivateRocket/PrivateIntro'
import PrivateDecisionOne from '@/components/Articles/PrivateRocket/PrivateDecisionOne'
import PrivateDecisionTwo from '@/components/Articles/PrivateRocket/PrivateDecisionTwo'
import PrivateResultShoot from '@/components/Articles/PrivateRocket/PrivateResultShoot'
import PrivateResultIgnore from '@/components/Articles/PrivateRocket/PrivateResultIgnore'
import PrivateResultAttack from '@/components/Articles/PrivateRocket/PrivateResultAttack'
import PrivateResultLeave from '@/components/Articles/PrivateRocket/PrivateResultLeave'
import PrivateResultAllow from '@/components/Articles/PrivateRocket/PrivateResultAllow'

import PopIntro from '@/components/Articles/PopulationLimit/PopIntro'
import PopDecisionOne from '@/components/Articles/PopulationLimit/PopDecisionOne'
import PopDecisionTwo from '@/components/Articles/PopulationLimit/PopDecisionTwo'
import PopResultExile from '@/components/Articles/PopulationLimit/PopResultExile'
import PopResultIgnore from '@/components/Articles/PopulationLimit/PopResultIgnore'
import PopResultElderly from '@/components/Articles/PopulationLimit/PopResultElderly'
import PopResultAdults from '@/components/Articles/PopulationLimit/PopResultAdults'
import PopResultYouth from '@/components/Articles/PopulationLimit/PopResultYouth'

import GameOver from '@/components/Articles/GameOver'

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
      path: '/private',
      components: {
        default: PrivateIntro,
        content: PrivateIntro
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
      path: '/pop-result-exile',
      components: {
        default: PopResultExile,
        content: PopResultExile
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
      path: '/pop-result-elderly',
      components: {
        default: PopResultElderly,
        content: PopResultElderly
      }
    },
    {
      path: '/pop-result-adults',
      components: {
        default: PopResultAdults,
        content: PopResultAdults
      }
    },
    {
      path: '/pop-result-youth',
      components: {
        default: PopResultYouth,
        content: PopResultYouth
      }
    },
    {
      path: '/game-over',
      components: {
        default: GameOver,
        content: GameOver
      }
    }
  ]
})
