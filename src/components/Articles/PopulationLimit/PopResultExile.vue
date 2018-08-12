<template>
  <div class="pop-exile">
    <h3>Exile</h3>
    <img :src="spacePic" height="300px" width="400px"></img>
    <p>Using the vessel previously acquired, you forcefully exile vagrants and criminals. You inform them that they are to take the vessel and find somewhere else to live.
    In addition, you leave them with a promise that if they return they will be shot on sight.  </p>
    <p>25 people were exiled from the station.</p>
    <router-link
      class="button button-green"
      to="/"
    >Next</router-link>
  </div>
</template>



<script>
  import spacePic from '@/assets/space-blue.jpg'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'PopDecisonThree',
    computed: {
      ...mapGetters([
        'people',
        'debris',
        'unrest',
        'damage'
      ]),
      spacePic: () => spacePic
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

      }
    }
  }
</script>


<style scoped>
</style>
