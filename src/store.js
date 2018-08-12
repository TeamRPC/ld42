import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  people: 50,
  debris: 30,
  unrest: 15,
  damage: 0,
  log: []
}

const mutations = {
  setDebris (state, amt) {
    state.debris = amt
  },
  addDebris (state, amt) {
    state.debris += amt
    state.log.push({type: 'debris', amount: amt})
  },
  addDamage (state, amt) {
    state.damage += amt
    state.log.push({type: 'debris', amount: amt})
  },
  setDamage (state, amt) {
    state.damage = amt
  },
  addUnease (state, amt) {
    state.unease += amt
    state.log.push({type: 'unease', amount: amt})
  },
  setUnease (state, amt) {
    state.unease = amt
  }
}

const actions = {
  addDebris (state, amt) {
    if (state.state.debris > 99) {
      state.commit('setDebris', 0)
      state.commit('addDamage', 25)
    } else {
      state.commit('addDebris', amt)
    }
  },
  addUnease (state, amt) {
    if (state.state.unease > 99) {
      state.commit('setUnease', 0)
      state.commit('addDamage', 25)
    } else {
      state.commit('addUnease', amt)
    }
  }
}

const getters = {
  debris: state => state.debris,
  people: state => state.people,
  unrest: state => state.unrest,
  damage: state => state.damage
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
