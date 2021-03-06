import Vue from 'vue'
import Vuex from 'vuex'
import defaultState from '@/defaultState'

Vue.use(Vuex)

const state = defaultState.getStartingState()

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
  subtractDamage (state, amt) {
    state.damage -= amt
  },
  addUnrest (state, amt) {
    state.unrest += amt
  },
  setUnrest (state, amt) {
    state.unrest = amt
  },
  subtractUnrest (state, amt) {
    state.unrest -= amt
  },
  grantInventory (state, item) {
    if (typeof item.quantity === 'undefined') {
      item.quantity = 1
    }
    // if there already exists an inventory item of the same name, add +1
    // instead of creating a duplicate.
    var matchingItemIndex = state.inventory.findIndex(inv => inv.name === item.name)
    if (matchingItemIndex !== -1) {
      state.inventory[matchingItemIndex].quantity += 1
    } else {
      state.inventory.push(item)
    }
  },
  consumeInventory (state, item) {
    var matchingItemIndex = state.inventory.findIndex(inv => inv.name === item)
    if (state.inventory[matchingItemIndex].quantity === 1) {
      state.inventory = state.inventory.filter(i => i.name !== item)
    } else {
      state.inventory[matchingItemIndex].quantity -= 1
    }
  },
  clearInventory (state, item) {
    state.inventory = defaultState.getStartingState().inventory
  },
  addPeople (state, amt) {
    state.people += amt
  },
  setPeople (state, amt) {
    state.people = amt
  },
  subtractPeople (state, amt) {
    state.people -= amt
  },
  loseGame (state, amt) {
    state.lost = true
    state.won = false
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
  setDebris (state, amt) {
    state.commit('setDebris', amt)
  },
  addUnrest (state, amt) {
    if (state.state.unrest > 99) {
      state.commit('setUnrest', 0)
      state.commit('addDamage', 25)
    } else {
      state.commit('addUnrest', amt)
    }
  },
  subtractUnrest (state, amt) {
    var ur = state.state.unrest
    if (ur - amt < 1) {
      state.commit('subtractDamage', 25)
      state.commit('setUnrest', 0)
    } else {
      state.commit('subtractUnrest', amt)
    }
  },
  setUnrest (state, amt) {
    state.commit('setUnrest', amt)
  },
  grantInventory (state, item) {
    state.commit('grantInventory', item)
  },
  consumeInventory (state, item) {
    state.commit('consumeInventory', item)
  },
  clearInventory (state) {
    state.commit('clearInventory')
  },
  addPeople (state, amt) {
    if (state.state.people > 100) {
      state.commit('addUnrest', 25)
      state.commit('addDamage', 5)
    }
    state.commit('addPeople', amt)
  },
  setPeople (state, amt) {
    state.commit('setPeople', amt)
  },
  subtractPeople (state, amt) {
    var ppl = state.state.people
    if (ppl - amt < 1) {
      state.commit('loseGame')
      state.commit('setPeople', 0)
    } else {
      state.commit('subtractPeople', amt)
    }
  },
  addDamage (state, amt) {
    var dmg = state.state.damage
    if (dmg + amt > 99) {
      state.commit('loseGame')
    } else {
      state.commit('addDamage', amt)
    }
  },
  setDamage (state, amt) {
    state.commit('setDamage', amt)
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
