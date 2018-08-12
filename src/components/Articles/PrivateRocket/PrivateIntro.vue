


<template>
  <div class="private-rocket">
    <h2>Unknown Vessel</h2>
    <img
      :src="shipPicture"
    ></img>
    <p>@TODO insert description here</p>
    <router-link
      class="button button-green"
      to="/private-decision-1"
    >Next</router-link>
  </div>
</template>



<script>
  import shipPicture from '@/assets/ship-side.png'
  // import shipMp3 from '@/assets/ship.mp3'

  export default {
    name: 'PrivateIntro',
    computed: {
      shipPicture: () => shipPicture
    }
  }
</script>


<style scoped>
</style>
