


<template>
  <div class="private-rocket">
    <h2>Visitors</h2>
    <img
      :src="shipPicture"
    ></img>
    <p>A passenger vessel from Station 14 hails you and asks for assistance. Station 14 is at capacity, and they are looking for a place to call home.</p>
    <router-link
      class="button button-green"
      to="/visitors-decision-1"
    >Next</router-link>
  </div>
</template>



<script>
  import shipPicture from '@/assets/small-ship.png'
  import hail from '@/assets/FX049.mp3'
  // import shipMp3 from '@/assets/ship.mp3'

  export default {
    name: 'RaidersIntro',
    computed: {
      shipPicture: () => shipPicture
    },
    methods: {
      playSfx: function (sfx) {
        this.$parent.playSfx(sfx)
      }
    },
    mounted: function () {
      this.playSfx({
        title: 'hail',
        src: hail
      })
    }
  }
</script>


<style scoped>
</style>
