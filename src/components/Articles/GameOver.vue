


<template>
  <div class="game-over">
    <h1>GAME OVER</h1>
    <img :src="explosion"></img>
    <p>Station 7 resources were not properly managed</p>
    <a
      class="button button-green"
      to="/"
      @click.prevent="resetGame()"
    >Restart</a>
  </div>
</template>

<script>
  import explosion from '@/assets/explosion.gif'
  import store from '@/store'
  import defaultState from '@/defaultState'
  import { mapGetters, mapActions } from 'vuex'
  import explosionMp3 from '@/assets/explosion.mp3'
  import rezMp3 from '@/assets/FX046.mp3'

  export default {
    name: 'GameOver',
    computed: {
      ...mapGetters([
        'people'
      ]),
      explosion: () => explosion
    },
    mounted: function () {
      this.playSfx({
        title: 'Explosion',
        src: explosionMp3
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
