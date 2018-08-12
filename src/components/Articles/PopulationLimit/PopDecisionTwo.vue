


<template>
  <div class="private-rocket">
    <h2>Unknown Vessel</h2>
    <img :src="shipPicture"></img>
    <p>VESSEL: "S.O.S., S.O.S! This is the L.S.S. Rottenshire, 25 souls aboard. Our mother ship has sunk and we are looking for refuge. Please let us aboard the station!"</p>
    <a
      class="button button-gray"
      @click.prevent="ignoreVessel()"
    >Ignore it</a>
    <a
      class="button button-green"
      @click.prevent="allowVessel()"
    >Allow aboard</a>
    <a
      class="button button-red"
      @click.prevent="denyVessel()"
    >Ask to leave</a>
  </div>
</template>



<script>
  import shipPicture from '@/assets/ship-side.png'
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PrivateDecisionTwo',
    computed: {
      ...mapGetters([
        'people',
        'debris',
        'unrest',
        'damage'
      ]),
      shipPicture: () => shipPicture
    },
    methods: mapActions([
      'addDebris',
      'setDebris',
      'addDamage',
      'setDamage',
      'addPeople',
      'addUnrest'
    ]),
    data () {
      return {
        allowVessel: function () {
          store.dispatch('addPeople', 25)
          store.dispatch('subtractUnrest', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            label: 'Vessel',
            image: shipPicture
          })

          this.$router.push({
            path: '/private-result-allow'
          })
        },
        ignoreVessel: function () {
          store.dispatch('addPeople', 25)
          store.dispatch('addUnrest', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })

          this.$router.push({
            path: '/private-result-ignore'
          })
        },
        denyVessel: function () {
          // randomly determine if vessel leaves or attacks
          const random = Math.floor(Math.random() * (99 - 0 + 1) + 0)

          console.log(random)
          if (random > 48) {
            // leave
            store.dispatch('subtractUnrest', 25)
            this.$router.push({
              path: '/private-result-leave'
            })
          } else {
            // attack
            store.dispatch('addUnrest', 25)
            store.dispatch('addDamage', 25)
            store.dispatch('subtractPeople', 25)
            this.$router.push({
              path: '/private-result-attack'
            })
          }
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
