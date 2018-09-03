


<template>
  <div class="private-rocket">
    <h2>Unknown Vessel</h2>
    <p>The unknown vessel has set a course for Station 7. What will you do?</p>
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
  import lazerpan from '@/assets/lazerpan.mp3'
  import hail from '@/assets/FX049.mp3'

  export default {
    name: 'PrivateDecisionOne',
    computed: mapGetters([
      'people',
      'debris',
      'unrest',
      'damage'
    ]),
    methods: {
      ...mapActions([
        'addDebris',
        'setDebris',
        'addDamage',
        'setDamage'
      ]),
      playSfx: function (sfx) {
        this.$parent.playSfx(sfx)
      }
    },
    data () {
      return {
        shootVessel: function () {
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })
          this.playSfx({
            title: 'Lazer Pan Boom',
            src: lazerpan
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
          this.playSfx({
            title: 'hail',
            src: hail
          })
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
