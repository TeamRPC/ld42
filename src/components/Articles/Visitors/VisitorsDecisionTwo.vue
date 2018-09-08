


<template>
  <div class="visitors">
    <h2>Visitors</h2>
    <img :src="shipPicture"></img>
    <p>The vessel acknowledges receipt of your message, but continues towards the Station.</p>
    <a
      class="button button-gray"
      @click.prevent="ignoreVessel()"
    >Ignore it</a>
    <a
      class="button button-green"
      @click.prevent="shootVessel()"
    >Shoot it</a>
  </div>
</template>



<script>
  import shipPicture from '@/assets/small-ship.png'
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'
  import slaughter from '@/assets/slaughter.mp3'
  import lazerpan from '@/assets/lazerattack.mp3'

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
        ignoreVessel: function () {
          store.dispatch('subtractPeople', 75)
          store.dispatch('addUnrest', 25)
          store.dispatch('grantInventory', {
            label: 'Raider Note',
            name: 'note-raid',
            hidden: true
          })
          this.playSfx({
            title: 'Slaughter',
            src: slaughter
          })
          this.$router.push({
            path: '/visitors-result-ignore'
          })
        },
        shootVessel: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('addUnrest', 25)
          this.playSfx({
            title: 'Shoot',
            src: lazerpan
          })
          store.dispatch('grantInventory', {
            label: 'Raider Note',
            name: 'note-raid',
            hidden: true
          })
          this.$router.push({
            path: '/visitors-result-shoot'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
