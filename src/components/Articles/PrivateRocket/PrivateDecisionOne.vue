


<template>
  <div class="private-rocket">
    <h2>Unknown Vessel</h2>
    <p>An unknown vessel is approaching. What will you do?</p>
    <a
      class="button button-red"
      @click.prevent="shootVessel()"
    >
      Shoot it
    </a>
    <a
      class="button button-blue"
      @click.prevent="hailVessel()"
    >
      Hail it
    </a>
    <a
      class="button button-gray"
      @click.prevent="ignoreVessel()"
    >
      Ignore it
    </a>
  </div>
</template>



<script>
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'
  import shipPicture from '@/assets/ship-side.png'

  export default {
    name: 'PrivateDecisionOne',
    computed: mapGetters([
      'people',
      'debris',
      'unrest',
      'damage'
    ]),
    methods: mapActions([
      'addDebris',
      'setDebris',
      'addDamage',
      'setDamage'
    ]),
    data () {
      return {
        shootVessel: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })

          this.$router.push({
            path: '/private-result-shoot'
          })
        },
        ignoreVessel: function () {
          store.dispatch('addPeople', 25)
          store.dispatch('addUnrest', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            label: 'Vessel',
            image: shipPicture,
            hidden: false
          })

          this.$router.push({
            path: '/private-result-ignore'
          })
        },
        hailVessel: function () {
          this.$router.push({
            path: '/private-decision-2'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
