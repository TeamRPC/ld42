


<template>
  <div class="pop">
    <h2Population Limit</h2>
    <p>Space Station 7 cannot support this population. What will you do?</p>
    <a
      class="button button-red"
      @click.prevent="purgeStation()"
    >
      Purge the excess population
    </a>
    <a
      class="button button-blue"
      @click.prevent="ignoreStation()"
    >
      Do nothing
    </a>
    <a
      class="button button-red"
      :class="{'invis': hidden}"
      @click.prevent="exileVessel()"
    >
      Exile the Vessel
    </a>
  </div>
</template>



<script>
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'
  import station from '@/assets/station-2.png'

  export default {
    name: 'PopDecisionOne',
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
        purgeStation: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })

          this.$router.push({
            path: '/private-result-shoot'
          })
        },
        ignoreStation: function () {
          store.dispatch('addPeople', 25)
          store.dispatch('addUnrest', 25)

          this.$router.push({
            path: '/pop-result-ignore'
          })
        },
        exileVessel: function () {
          this.$router.push({
            path: '/pop-result-exile'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
