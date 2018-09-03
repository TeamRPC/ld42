


<template>
  <div class="pop-purge-who">
    <h2>The people on the station fit into three distinct age groups. Who will you purge?</h2>
    <img :src="spacePic" width="300px" height="200px"></img>
    <p></p>
    <a
      class="button button-red"
      @click.prevent="purgeElderly()"
    >Purge the elderly</a>
    <a
      class="button button-red"
      @click.prevent="purgeYouth()"
    >Purge the youth</a>
    <a
      class="button button-red"
      @click.prevent="purgeAdults()"
    >Purge the adults</a>
  </div>
</template>



<script>
  import spacePic from '@/assets/space-green.jpg'
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'
  import scream from '@/assets/scream.mp3'
  import sadness from '@/assets/sadness.mp3'
  import death from '@/assets/death.mp3'

  export default {
    name: 'PopDecisionTwo',
    computed: {
      ...mapGetters([
        'people',
        'debris',
        'unrest',
        'damage'
      ]),
      spacePic: () => spacePic
    },
    methods: {
      ...mapActions([
        'addDebris',
        'setDebris',
        'addDamage',
        'setDamage',
        'addPeople',
        'addUnrest'
      ]),
      playSfx: function (sfx) {
        this.$parent.playSfx(sfx)
      }
    },
    data () {
      return {
        purgeElderly: function () {
          store.dispatch('subtractPeople', 25)
          store.dispatch('addDebris', 25)
          this.playSfx({
            title: 'death',
            src: death
          })

          this.$router.push({
            path: '/pop-result-elderly'
          })
        },
        purgeAdults: function () {
          store.dispatch('addUnrest', 25)
          store.dispatch('addDebris', 25)
          store.dispatch('subtractPeople', 75)
          store.dispatch('addDamage', 25)
          this.playSfx({
            title: 'scream',
            src: scream
          })

          this.$router.push({
            path: '/pop-result-adults'
          })
        },
        purgeYouth: function () {
          store.dispatch('addUnrest', 25)
          store.dispatch('addDebris', 25)
          store.dispatch('subtractPeople', 50)
          store.dispatch('addDamage', 25)
          this.playSfx({
            title: 'sadness',
            src: sadness
          })

          this.$router.push({
            path: '/pop-result-youth'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
