


<template>
  <div class="game-over">
    <h1>WINNER!</h1>
    <img :src="firework"></img>
    <p>With you at the helm, Station 7 prospers... For today.</p>
    <a
      class="button button-green"
      to="/"
      @click.prevent="resetGame()"
    >Play Again</a>
  </div>
</template>

<script>
  import firework from '@/assets/firework.gif'
  import store from '@/store'
  import defaultState from '@/defaultState'
  import { mapGetters, mapActions } from 'vuex'
  import fanfare from '@/assets/fanfare.mp3'
  import rezMp3 from '@/assets/FX046.mp3'

  export default {
    name: 'GameOver',
    computed: {
      ...mapGetters([
        'people'
      ]),
      firework: () => firework
    },
    mounted: function () {
      this.playSfx({
        title: 'fanfare',
        src: fanfare
      })
    },
    methods: {
      ...mapActions([
        'setDebris',
        'setDamage',
        'setPeople',
        'setUnrest',
        'clearInventory'
      ]),
      playSfx: function (sfx) {
        this.$parent.playSfx(sfx)
      }
    },
    data () {
      return {
        resetGame: function () {
          const originalState = defaultState.getStartingState()
          store.dispatch('setDebris', originalState.debris)
          store.dispatch('setDamage', originalState.damage)
          store.dispatch('setPeople', originalState.people)
          store.dispatch('setUnrest', originalState.unrest)
          store.dispatch('clearInventory')
          this.playSfx({
            title: 'rez',
            src: rezMp3
          })

          this.$router.push({
            path: '/'
          })
        }
      }
    }
  }
</script>

<style scoped>
</style>
