


<template>
  <div class="pop">
    <h2>Population Limit</h2>
    <img :src="station" width="200px" height="200px"></img>
    <p>Space Station 7 cannot support this population, "We are Running out of Space!". What will you do?</p>
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
      :class="isVesselInInventory"
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
    computed: {
      ...mapGetters([
        'people',
        'debris',
        'unrest',
        'damage',
        'inventory'
      ]),
      station: () => station,
      isVesselInInventory: function () {
        return {
          'invis': this.inventory.filter(
            item => item.name === 'vessel'
          ).length === 0
        }
      }
    },
    methods: mapActions([
      'addDebris',
      'setDebris',
      'addDamage',
      'setDamage'
    ]),
    data () {
      return {
        hidden: true,
        purgeStation: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })

          this.$router.push({
            path: '/pop-decision-2'
          })
        },
        ignoreStation: function () {
          store.dispatch('subtractPeople', 25)
          store.dispatch('addUnrest', 50)
          store.dispatch('addDamage', 50)

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
  .invis {
    display: none;
  }
</style>
