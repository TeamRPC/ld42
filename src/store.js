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
  lost: false,
  won: false,
  inventory: [
    {
      label: 'Transparent Aluminium Repair Kit',
      name: 'kit',
      image: toolbox,
      quantity: 1
    },
    {
      label: 'Space Candy',
      name: 'candy',
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
    state.inventory.push(item)
  },
  consumeInventory (state, item) {
    console.log(state.inventory.filter(i => i.name === item))
    // var index = state.inventory.indexOf(item)
    // if (index !== -1) array.splice(index, 1)
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
  grantInventory (state, item) {
    state.commit('grantInventory', item)
  },
  consumeInventory (state, item) {
    state.commit('consumeInventory', item)
  },
  addPeople (state, amt) {
    if (state.state.people > 100) {
      state.commit('addUnrest', 25)
      state.commit('addDamage', 5)
    }
    state.commit('addPeople', amt)
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
      state.commit('lostGame')
    } else {
      state.commit('addDamage', amt)
    }
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
