


<template>
  <div class="private-rocket">
    <h2>Unknown Vessel</h2>
    <p>An unknown vessel is approaching. What will you do?</p>
    <a
      class="button button-red"
      @click.prevent="addDebrisThenNav()"
    >
      Shoot it
    </a>
    <router-link
      class="button button-blue"
      to="/null"
    >Hail it</router-link>
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
        addDebrisThenNav: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', 'private')

          this.$router.push({
            path: '/private-result-shoot'
          })
        },
        ignoreVessel: function () {
          store.dispatch('addPeople', 25)
          store.dispatch('addUnrest', 25)
          store.dispatch('grantInventory', 'private')

          this.$router.replace({
            path: '/private-result-ignore'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
