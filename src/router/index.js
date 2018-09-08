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

import VisitorsIntro from '@/components/Articles/Visitors/VisitorsIntro'
import VisitorsDecisionOne from '@/components/Articles/Visitors/VisitorsDecisionOne'
import VisitorsDecisionTwo from '@/components/Articles/Visitors/VisitorsDecisionTwo'
import VisitorsResultShoot from '@/components/Articles/Visitors/VisitorsResultShoot'
import VisitorsResultAllow from '@/components/Articles/Visitors/VisitorsResultAllow'
import VisitorsResultIgnore from '@/components/Articles/Visitors/VisitorsResultIgnore'

import GameOver from '@/components/Articles/GameOver'
import GameWon from '@/components/Articles/GameWon'

Vue.use(Router)

export default new Router({
  mode: 'hash',
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
      path: '/visitors-decision-1',
      components: {
        default: VisitorsDecisionOne,
        content: VisitorsDecisionOne
      }
    },
    {
      path: '/visitors',
      components: {
        default: VisitorsIntro,
        content: VisitorsIntro
      }
    },
    {
      path: '/visitors-result-shoot',
      components: {
        default: VisitorsResultShoot,
        content: VisitorsResultShoot
      }
    },
    {
      path: '/visitors-result-allow',
      components: {
        default: VisitorsResultAllow,
        content: VisitorsResultAllow
      }
    },
    {
      path: '/visitors-result-ignore',
      components: {
        default: VisitorsResultIgnore,
        content: VisitorsResultIgnore
      }
    },
    {
      path: '/visitors-decision-2',
      components: {
        default: VisitorsDecisionTwo,
        content: VisitorsDecisionTwo
      }
    },
    {
      path: '/game-over',
      components: {
        default: GameOver,
        content: GameOver
      }
    },
    {
      path: '/game-win',
      components: {
        default: GameWon,
        content: GameWon
      }
    }
  ]
})
