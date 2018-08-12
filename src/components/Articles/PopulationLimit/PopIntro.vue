


<template>
  <div class="pop">
    <h2>Population Limit</h2>
    <img
      :src="feet"
    ></img>
    <p>Space Station 7 is full!</p>
    <router-link
      class="button button-green"
      to="/private-decision-1"
    >Next</router-link>
  </div>
</template>



<script>
  import feet from '@/assets/feet.png'

  export default {
    name: 'PopIntro',
    computed: {
      feet: () => feet
    }
  }
</script>


<style scoped>
</style>
