


<template>
  <div class="raiders">
    <h2>Raiders</h2>
    <img
      :src="shipPicture"
    ></img>
    <p>A passenger vessel is in need of assistance. What will you do?</p>
    <a
      class="button button-red"
      @click.prevent="shootVessel()"
    >
      Shoot it
    </a>
    <a
      class="button button-blue"
      @click.prevent="allowVessel()"
    >
      Allow request to dock
    </a>
    <a
      class="button button-gray"
      @click.prevent="denyVessel()"
    >
      Deny entry
    </a>
  </div>
</template>



<script>
  import store from '@/store'
  import { mapGetters, mapActions } from 'vuex'
  import shipPicture from '@/assets/small-ship.png'
  import lazerpan from '@/assets/lazerattack.mp3'
  import afterburner from '@/assets/afterburner.mp3'
  import slaughter from '@/assets/slaughter.mp3'

  export default {
    name: 'RaidersDecisionOne',
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
        'setDamage'
      ]),
      playSfx: function (sfx) {
        this.$parent.playSfx(sfx)
      }
    },
    data () {
      return {
        shootVessel: function () {
          console.log('shootin!')
          this.playSfx({
            title: 'Lazer Pan Boom',
            src: lazerpan
          })
          store.dispatch('addDebris', 25)
          store.dispatch('grantInventory', {
            name: 'vessel',
            hidden: true
          })
          this.$router.push({
            path: '/visitors-result-shoot'
          })
        },
        denyVessel: function () {
          this.playSfx({
            title: 'Afterburner',
            src: afterburner
          })

          this.$router.push({
            path: '/visitors-decision-2'
          })
        },
        allowVessel: function () {
          this.playSfx({
            title: 'slaughter',
            src: slaughter
          })
          store.dispatch('grantInventory', {
            name: 'vessel',
            quantity: 1,
            image: shipPicture,
            hidden: false
          })
          store.dispatch('subtractPeople', 50)
          store.dispatch('addUnrest', 50)
          this.$router.push({
            path: '/visitors-result-allow'
          })
        }
      }
    }
  }
</script>


<style scoped>
</style>
