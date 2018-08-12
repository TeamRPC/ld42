import Vue from 'vue'
import Vuex from 'vuex'
import toolbox from '@/assets/toolbox.png'
import candy from '@/assets/candy.png'

Vue.use(Vuex)

const state = {
  people: 50,
  debris: 30,
  unrest: 15,
  damage: 0,
  inventory: [
    {
      name: 'Transparent Aluminium Repair Kit',
      image: toolbox,
      quantity: 1
    },
    {
      name: 'Space Candy',
      image: candy,
      quantity: 2
    }
  ]
}

const mutations = {
  setDebris (state, amt) {
    state.debris = amt
  },
  addDebris (state, amt) {
    state.debris += amt
  },
  addDamage (state, amt) {
    state.damage += amt
  },
  setDamage (state, amt) {
    state.damage = amt
  },
  addUnease (state, amt) {
    state.unease += amt
  },
  setUnease (state, amt) {
    state.unease = amt
  },
  grantInventory (state, item) {
    state.inventory.push(item)
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
  },
  grantInventory (state, item) {
    state.commit('grantInventory', item)
  }
}

const getters = {
  debris: state => state.debris,
  people: state => state.people,
  unrest: state => state.unrest,
  damage: state => state.damage,
  inventory: state => state.inventory
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
